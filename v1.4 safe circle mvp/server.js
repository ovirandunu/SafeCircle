/**
 * Backend API Server for SafeCircle
 * 
 * This server handles:
 * - Stripe payment processing
 * - Subscription management
 * - Tracking events
 * - Database operations
 */

import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

// Initialize PostgreSQL
let pool;
try {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  // Test connection
  pool.query('SELECT NOW()').catch(err => {
    console.warn('⚠️  Database connection failed:', err.message);
    console.warn('⚠️  Running in no-database mode - data will not persist');
  });
} catch (err) {
  console.warn('⚠️  Database initialization failed:', err.message);
  console.warn('⚠️  Running in no-database mode - data will not persist');
}

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGINS?.split(',') || ['http://localhost:5173'],
  credentials: true,
}));

app.use(express.json());

// Stripe webhook middleware (raw body for signature verification)
app.use('/api/webhooks/stripe', express.raw({ type: 'application/json' }));

// ============================================
// HEALTH CHECK
// ============================================
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ============================================
// STRIPE PAYMENT ENDPOINTS
// ============================================

/**
 * Create a checkout session
 */
app.post('/api/checkout/create-session', async (req, res) => {
  try {
    const { plan, billingPeriod, email } = req.body;

    // Validate input
    if (!plan || !billingPeriod || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get the correct price ID based on plan and billing period
    const priceMap: Record<string, string> = {
      'basic_monthly': process.env.STRIPE_PRICE_BASIC_MONTHLY,
      'basic_yearly': process.env.STRIPE_PRICE_BASIC_YEARLY,
      'full_monthly': process.env.STRIPE_PRICE_FULL_MONTHLY,
      'full_yearly': process.env.STRIPE_PRICE_FULL_YEARLY,
    };

    const priceKey = `${plan}_${billingPeriod}`;
    const priceId = priceMap[priceKey];

    if (!priceId) {
      return res.status(400).json({ error: 'Invalid plan or billing period' });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.VITE_APP_URL}/checkout?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.VITE_APP_URL}/checkout?canceled=true`,
      metadata: {
        plan,
        billingPeriod,
      },
      subscription_data: {
        metadata: {
          plan,
          billingPeriod,
        },
      },
    });

    res.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Create a payment intent (for custom checkout flow)
 */
app.post('/api/checkout/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'eur', email, plan, billingPeriod } = req.body;

    if (!amount || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      receipt_email: email,
      metadata: {
        plan,
        billingPeriod,
      },
    });

    res.json({ 
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    });
  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Retrieve checkout session details
 */
app.get('/api/checkout/session/:sessionId', async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    
    res.json({
      status: session.payment_status,
      customer_email: session.customer_email,
      amount_total: session.amount_total,
    });
  } catch (error: any) {
    console.error('Error retrieving session:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// STRIPE WEBHOOKS
// ============================================

/**
 * Handle Stripe webhooks for subscription events
 */
app.post('/api/webhooks/stripe', async (req, res) => {
  const sig = req.headers['stripe-signature'];

  if (!sig) {
    return res.status(400).send('Missing stripe-signature header');
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object;
        console.log('✅ Checkout completed:', session.id);
        
        // Save subscription to database
        await saveSubscription(session);
        break;
      }

      case 'customer.subscription.created': {
        const subscription = event.data.object;
        console.log('✅ Subscription created:', subscription.id);
        break;
      }

      case 'customer.subscription.updated': {
        const subscription = event.data.object;
        console.log('🔄 Subscription updated:', subscription.id);
        await updateSubscription(subscription);
        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        console.log('❌ Subscription canceled:', subscription.id);
        await cancelSubscription(subscription);
        break;
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object;
        console.log('💰 Payment succeeded:', invoice.id);
        break;
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object;
        console.error('❌ Payment failed:', invoice.id);
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    res.json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
});

// ============================================
// DATABASE FUNCTIONS
// ============================================

async function saveSubscription(session: any) {
  if (!pool) {
    console.log('💾 [No-DB Mode] Would save subscription:', session.id);
    return;
  }
  const query = `
    INSERT INTO subscriptions (
      stripe_session_id,
      stripe_customer_id,
      stripe_subscription_id,
      customer_email,
      plan,
      billing_period,
      status,
      amount,
      created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())
    ON CONFLICT (stripe_session_id) 
    DO UPDATE SET 
      stripe_subscription_id = EXCLUDED.stripe_subscription_id,
      status = EXCLUDED.status
  `;

  const values = [
    session.id,
    session.customer,
    session.subscription,
    session.customer_email,
    session.metadata?.plan || 'unknown',
    session.metadata?.billingPeriod || 'unknown',
    'active',
    session.amount_total,
  ];

  await pool.query(query, values);
}

async function updateSubscription(subscription: any) {
  if (!pool) {
    console.log('💾 [No-DB Mode] Would update subscription:', subscription.id);
    return;
  }
  const query = `
    UPDATE subscriptions 
    SET status = $1, updated_at = NOW()
    WHERE stripe_subscription_id = $2
  `;

  await pool.query(query, [subscription.status, subscription.id]);
}

async function cancelSubscription(subscription: any) {
  if (!pool) {
    console.log('💾 [No-DB Mode] Would cancel subscription:', subscription.id);
    return;
  }
  const query = `
    UPDATE subscriptions 
    SET status = 'canceled', canceled_at = NOW(), updated_at = NOW()
    WHERE stripe_subscription_id = $1
  `;

  await pool.query(query, [subscription.id]);
}

// ============================================
// TRACKING ENDPOINTS
// ============================================

/**
 * Track analytics events
 */
app.post('/api/track', async (req, res) => {
  try {
    const { event, sessionId, data } = req.body;

    if (!pool) {
      console.log(`📊 [No-DB Mode] Tracked: ${event} (Session: ${sessionId})`);
      return res.json({ success: true });
    }

    const query = `
      INSERT INTO tracking_events (
        event,
        session_id,
        data,
        created_at
      ) VALUES ($1, $2, $3, NOW())
    `;

    await pool.query(query, [event, sessionId, JSON.stringify(data)]);

    console.log(`📊 Tracked: ${event} (Session: ${sessionId})`);
    
    res.json({ success: true });
  } catch (error: any) {
    console.error('Error tracking event:', error);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Get funnel analytics
 */
app.get('/api/analytics/funnel', async (req, res) => {
  try {
    if (!pool) {
      return res.json({
        total_visitors: 0,
        clicked_plan: 0,
        viewed_step_1: 0,
        viewed_step_2: 0,
        submitted_email: 0,
        viewed_step_3: 0,
        attempted_payment: 0,
        completed_payment: 0
      });
    }
    const query = `
      SELECT 
        COUNT(DISTINCT CASE WHEN event = 'page_view' THEN session_id END) as total_visitors,
        COUNT(DISTINCT CASE WHEN event = 'checkout_plan_clicked' THEN session_id END) as clicked_plan,
        COUNT(DISTINCT CASE WHEN event = 'checkout_step_1_viewed' THEN session_id END) as viewed_step_1,
        COUNT(DISTINCT CASE WHEN event = 'checkout_step_2_viewed' THEN session_id END) as viewed_step_2,
        COUNT(DISTINCT CASE WHEN event = 'checkout_email_submitted' THEN session_id END) as submitted_email,
        COUNT(DISTINCT CASE WHEN event = 'checkout_step_3_viewed' THEN session_id END) as viewed_step_3,
        COUNT(DISTINCT CASE WHEN event = 'checkout_payment_attempted' THEN session_id END) as attempted_payment,
        COUNT(DISTINCT CASE WHEN event = 'checkout_payment_completed' THEN session_id END) as completed_payment
      FROM tracking_events
    `;

    const result = await pool.query(query);
    res.json(result.rows[0]);
  } catch (error: any) {
    console.error('Error getting funnel analytics:', error);
    res.status(500).json({ error: error.message });
  }
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════╗
║   SafeCircle API Server                    ║
║   Port: ${PORT}                           ║
╠════════════════════════════════════════════╣
║   Endpoints:                               ║
║   POST /api/checkout/create-session        ║
║   POST /api/checkout/create-payment-intent ║
║   GET  /api/checkout/session/:sessionId    ║
║   POST /api/webhooks/stripe                ║
║   POST /api/track                          ║
║   GET  /api/analytics/funnel               ║
║   GET  /health                             ║
╚════════════════════════════════════════════╝
  `);
});

export default app;
