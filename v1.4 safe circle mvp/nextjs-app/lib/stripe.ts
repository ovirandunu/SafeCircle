/**
 * Stripe Integration Utilities for Next.js
 */

import { loadStripe, Stripe } from '@stripe/stripe-js';

let stripePromise: Promise<Stripe | null>;

/**
 * Get Stripe instance (singleton pattern)
 */
export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

/**
 * Create a checkout session and redirect to Stripe
 */
export const createCheckoutSession = async (
  plan: 'basic' | 'full',
  billingPeriod: 'monthly' | 'yearly',
  email: string
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Call our API to create a Stripe checkout session
    const response = await fetch('/api/checkout/create-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ plan, billingPeriod, email }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { success: false, error: data.error || 'Failed to create checkout session' };
    }

    // Redirect to Stripe Checkout using the session URL
    // Modern approach: use the URL returned from the session
    if (data.url) {
      window.location.href = data.url;
      return { success: true };
    }

    return { success: false, error: 'No checkout URL provided' };
  } catch (error: any) {
    console.error('Error creating checkout session:', error);
    return { success: false, error: error.message || 'An unexpected error occurred' };
  }
};

/**
 * Calculate discounted price for yearly billing
 */
export const calculateDiscountedPrice = (monthlyPrice: number, isYearly: boolean): number => {
  if (isYearly) {
    // 16% discount for yearly billing
    return monthlyPrice * 12 * 0.84;
  }
  return monthlyPrice;
};

/**
 * Format price for display
 */
export const formatPrice = (price: number, currency: string = 'EUR'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(price);
};
