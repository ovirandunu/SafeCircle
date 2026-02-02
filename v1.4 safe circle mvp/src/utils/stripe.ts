/**
 * Stripe Integration Utility
 * Handles Stripe checkout session creation and payment processing
 */

import { loadStripe, Stripe } from '@stripe/stripe-js';

// Initialize Stripe
let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    const publishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;
    
    if (!publishableKey) {
      console.error('Missing Stripe publishable key. Please add VITE_STRIPE_PUBLISHABLE_KEY to your .env file');
      return null;
    }
    
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};

/**
 * Create a Stripe checkout session and redirect to Stripe
 */
export const createCheckoutSession = async (
  plan: string,
  billingPeriod: string,
  email: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    
    const response = await fetch(`${apiUrl}/api/checkout/create-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        plan,
        billingPeriod,
        email,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create checkout session');
    }

    const { sessionId, url } = await response.json();

    // Option 1: Redirect to Stripe Checkout (recommended)
    if (url) {
      window.location.href = url;
      return { success: true };
    }

    // Option 2: Use Stripe.js to redirect (fallback)
    const stripe = await getStripe();
    if (!stripe) {
      throw new Error('Stripe failed to initialize');
    }

    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return {
      success: false,
      error: error.message || 'An error occurred during checkout',
    };
  }
};

/**
 * Create a payment intent for custom checkout flow
 */
export const createPaymentIntent = async (
  amount: number,
  email: string,
  plan: string,
  billingPeriod: string
): Promise<{ clientSecret?: string; error?: string }> => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    
    const response = await fetch(`${apiUrl}/api/checkout/create-payment-intent`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount,
        email,
        plan,
        billingPeriod,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to create payment intent');
    }

    const { clientSecret } = await response.json();
    return { clientSecret };
  } catch (error: any) {
    console.error('Error creating payment intent:', error);
    return {
      error: error.message || 'An error occurred',
    };
  }
};

/**
 * Retrieve checkout session status
 */
export const getCheckoutSession = async (
  sessionId: string
): Promise<{
  status?: string;
  email?: string;
  amount?: number;
  error?: string;
}> => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
    
    const response = await fetch(`${apiUrl}/api/checkout/session/${sessionId}`);

    if (!response.ok) {
      throw new Error('Failed to retrieve session');
    }

    const data = await response.json();
    return {
      status: data.status,
      email: data.customer_email,
      amount: data.amount_total,
    };
  } catch (error: any) {
    console.error('Error retrieving session:', error);
    return {
      error: error.message || 'An error occurred',
    };
  }
};

/**
 * Calculate price with 50% founding member discount
 */
export const calculateDiscountedPrice = (
  basePrice: number,
  billingPeriod: 'monthly' | 'yearly'
): number => {
  if (billingPeriod === 'yearly') {
    const yearlyPrice = basePrice * 12;
    return yearlyPrice / 2; // 50% off first year
  } else {
    return basePrice / 2; // 50% off for 3 months
  }
};

/**
 * Get price details for display
 */
export const getPriceDetails = (
  plan: 'basic' | 'full',
  billingPeriod: 'monthly' | 'yearly'
) => {
  const prices = {
    basic: 5,
    full: 8,
  };

  const basePrice = prices[plan];
  const yearlyTotal = basePrice * 12;
  const discountedPrice = calculateDiscountedPrice(basePrice, billingPeriod);

  return {
    basePrice,
    yearlyTotal: billingPeriod === 'yearly' ? yearlyTotal : basePrice,
    discountedPrice,
    displayPrice: basePrice,
    savings: billingPeriod === 'yearly' ? basePrice * 12 - yearlyTotal : 0,
  };
};
