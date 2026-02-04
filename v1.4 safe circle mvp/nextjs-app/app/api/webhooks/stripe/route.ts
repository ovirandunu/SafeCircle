import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Pool } from 'pg';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature provided' },
      { status: 400 }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 400 }
    );
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        await handleCheckoutSessionCompleted(session);
        break;
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionChange(subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        await handleSubscriptionCanceled(subscription);
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentSucceeded(invoice);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as Stripe.Invoice;
        await handleInvoicePaymentFailed(invoice);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Error handling webhook event:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  const { customer, subscription, customer_email, metadata } = session;

  if (!subscription || !customer_email) return;

  const plan = metadata?.plan || 'unknown';
  const billingPeriod = metadata?.billingPeriod || 'monthly';

  await pool.query(
    `INSERT INTO customers (stripe_customer_id, email, plan, billing_period, created_at)
     VALUES ($1, $2, $3, $4, NOW())
     ON CONFLICT (stripe_customer_id) 
     DO UPDATE SET email = $2, plan = $3, billing_period = $4, updated_at = NOW()`,
    [customer, customer_email, plan, billingPeriod]
  );

  await pool.query(
    `INSERT INTO subscriptions (stripe_subscription_id, stripe_customer_id, plan, billing_period, status, created_at)
     VALUES ($1, $2, $3, $4, 'active', NOW())`,
    [subscription, customer, plan, billingPeriod]
  );
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  const { id, status, metadata } = subscription;
  const plan = metadata?.plan || 'unknown';
  const billingPeriod = metadata?.billingPeriod || 'monthly';

  await pool.query(
    `UPDATE subscriptions 
     SET status = $1, plan = $2, billing_period = $3, updated_at = NOW()
     WHERE stripe_subscription_id = $4`,
    [status, plan, billingPeriod, id]
  );
}

async function handleSubscriptionCanceled(subscription: Stripe.Subscription) {
  await pool.query(
    `UPDATE subscriptions 
     SET status = 'canceled', canceled_at = NOW(), updated_at = NOW()
     WHERE stripe_subscription_id = $1`,
    [subscription.id]
  );
}

async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice) {
  console.log(`Payment succeeded for invoice: ${invoice.id}`);
}

async function handleInvoicePaymentFailed(invoice: Stripe.Invoice) {
  console.log(`Payment failed for invoice: ${invoice.id}`);
}
