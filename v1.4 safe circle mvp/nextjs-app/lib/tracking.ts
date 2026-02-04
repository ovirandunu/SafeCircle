/**
 * Privacy-First Tracking Utility for Next.js
 */

import { getCookiePreferences } from './cookieConsent';

export type TrackingEvent = 
  | 'page_view'
  | 'checkout_plan_clicked'
  | 'checkout_step_1_viewed'
  | 'checkout_step_2_viewed'
  | 'checkout_email_submitted'
  | 'checkout_step_3_viewed'
  | 'checkout_payment_attempted'
  | 'checkout_payment_completed'
  | 'cta_clicked';

interface TrackingData {
  event: TrackingEvent;
  page?: string;
  plan?: string;
  billingPeriod?: string;
  email?: string;
  amount?: number;
  [key: string]: any;
}

/**
 * Main tracking function - respects cookie consent
 */
export const track = (event: TrackingEvent, data?: Omit<TrackingData, 'event'>) => {
  const consent = getCookiePreferences();
  
  // ALWAYS send to server (essential tracking, no cookies)
  trackServerSide(event, data);
  
  // ONLY send to Google Analytics if analytical cookies accepted
  if (consent?.analytical) {
    trackGoogleAnalytics(event, data);
  }
};

/**
 * Server-side tracking (always happens, no consent needed)
 */
const trackServerSide = async (event: TrackingEvent, data?: any) => {
  try {
    const payload = {
      event,
      page: typeof window !== 'undefined' ? window.location.pathname : '',
      timestamp: new Date().toISOString(),
      ...data,
    };

    await fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch (error) {
    console.error('Server-side tracking failed:', error);
  }
};

/**
 * Google Analytics tracking (only with consent)
 */
const trackGoogleAnalytics = (event: TrackingEvent, data?: any) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  window.gtag('event', event, {
    ...data,
    event_category: data?.category || 'engagement',
    event_label: data?.label,
    value: data?.amount || data?.value,
  });
};

/**
 * Track page views
 */
export const trackPageView = (path: string) => {
  track('page_view', { page: path });
  
  const consent = getCookiePreferences();
  if (consent?.analytical && typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: path,
    });
  }
};

/**
 * Track plan selection clicks
 */
export const trackPlanClick = (plan: string, billingPeriod: string) => {
  track('checkout_plan_clicked', { plan, billingPeriod });
};

/**
 * Track checkout step progression
 */
export const trackCheckoutStep = (step: number) => {
  const events: Record<number, TrackingEvent> = {
    1: 'checkout_step_1_viewed',
    2: 'checkout_step_2_viewed',
    3: 'checkout_step_3_viewed',
  };
  const event = events[step];
  if (event) {
    track(event);
  }
};

/**
 * Track email submission in checkout
 */
export const trackEmailSubmit = (email: string) => {
  track('checkout_email_submitted', { email });
};

/**
 * Track payment attempt
 */
export const trackPaymentAttempt = (plan: string, amount: number) => {
  track('checkout_payment_attempted', { plan, amount });
};

/**
 * Initialize Google Analytics
 */
export const initializeGoogleAnalytics = (measurementId: string) => {
  if (typeof window === 'undefined') return;

  // Add gtag script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);
};

/**
 * Initialize Hotjar
 */
export const initializeHotjar = (hjid: number, hjsv: number) => {
  if (typeof window === 'undefined') return;

  (window as any).hj = (window as any).hj || function() {
    ((window as any).hj.q = (window as any).hj.q || []).push(arguments);
  };
  (window as any)._hjSettings = { hjid, hjsv };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://static.hotjar.com/c/hotjar-${hjid}.js?sv=${hjsv}`;
  document.head.appendChild(script);
};

/**
 * Initialize Microsoft Clarity
 */
export const initializeClarity = (projectId: string) => {
  if (typeof window === 'undefined') return;

  (window as any).clarity = (window as any).clarity || function() {
    ((window as any).clarity.q = (window as any).clarity.q || []).push(arguments);
  };

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${projectId}`;
  document.head.appendChild(script);
};

// TypeScript declarations for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
