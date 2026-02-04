import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-02-24.acacia',
});

export async function POST(req: NextRequest) {
  try {
    const { plan, billingPeriod, email } = await req.json();

    // Validate input
    if (!plan || !billingPeriod || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get the correct price ID based on plan and billing period
    const priceMap: Record<string, string> = {
      'basic_monthly': process.env.STRIPE_PRICE_BASIC_MONTHLY!,
      'basic_yearly': process.env.STRIPE_PRICE_BASIC_YEARLY!,
      'full_monthly': process.env.STRIPE_PRICE_FULL_MONTHLY!,
      'full_yearly': process.env.STRIPE_PRICE_FULL_YEARLY!,
    };

    const priceKey = `${plan}_${billingPeriod}`;
    const priceId = priceMap[priceKey];

    if (!priceId) {
      return NextResponse.json(
        { error: 'Invalid plan or billing period' },
        { status: 400 }
      );
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
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout?canceled=true`,
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

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
