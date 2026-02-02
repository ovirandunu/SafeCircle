/**
 * Privacy-First Tracking Utility
 * 
 * This utility handles both:
 * 1. Server-side tracking (always, no consent needed for anonymous funnel data)
 * 2. Google Analytics (only when analytical cookies accepted)
 */

import { getCookiePreferences } from './cookieConsent';

// Types
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
 * This sends anonymous funnel data to your backend
 */
const trackServerSide = async (event: TrackingEvent, data?: any) => {
  try {
    // Get or create anonymous session ID (stored in sessionStorage, no cookies)
    let sessionId = sessionStorage.getItem('sc_session_id');
    if (!sessionId) {
      sessionId = generateSessionId();
      sessionStorage.setItem('sc_session_id', sessionId);
    }

    // Get API URL from environment variable
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

    const payload = {
      event,
      sessionId,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      referrer: document.referrer,
      ...data,
    };

    // Send to your backend endpoint
    await fetch(`${apiUrl}/api/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      // Don't wait for response, fire and forget
      keepalive: true,
    }).catch(() => {
      // Silently fail - tracking shouldn't break the app
      console.debug('Server tracking failed:', event);
    });

    // Also log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 Server Track:', event, payload);
    }
  } catch (error) {
    // Silently fail
    console.debug('Server tracking error:', error);
  }
};

/**
 * Google Analytics tracking (only with consent)
 */
const trackGoogleAnalytics = (event: TrackingEvent, data?: any) => {
  try {
    // Check if gtag is available
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, {
        ...data,
        // Add custom parameters
        page_location: window.location.href,
        page_title: document.title,
      });

      if (process.env.NODE_ENV === 'development') {
        console.log('📈 GA Track:', event, data);
      }
    }
  } catch (error) {
    console.debug('GA tracking error:', error);
  }
};

/**
 * Track page view
 */
export const trackPageView = (pagePath?: string) => {
  const path = pagePath || window.location.pathname;
  track('page_view', { page: path });
};

/**
 * Track checkout funnel steps
 */
export const trackCheckoutStep = (step: 1 | 2 | 3, additionalData?: any) => {
  const eventMap = {
    1: 'checkout_step_1_viewed' as const,
    2: 'checkout_step_2_viewed' as const,
    3: 'checkout_step_3_viewed' as const,
  };
  
  track(eventMap[step], { step, ...additionalData });
};

/**
 * Track plan selection (CTA click)
 */
export const trackPlanClick = (plan: string, billingPeriod: string, source: 'pricing' | 'checkout' = 'pricing') => {
  track('checkout_plan_clicked', { 
    plan, 
    billingPeriod,
    source,
  });
};

/**
 * Track email submission
 */
export const trackEmailSubmit = (hashedEmail?: string) => {
  track('checkout_email_submitted', { 
    // For privacy, you can hash the email or just send a flag
    emailProvided: true,
    // Optional: send hashed email for conversion matching (only if consent given)
    ...(hashedEmail && { emailHash: hashedEmail })
  });
};

/**
 * Track payment attempt
 */
export const trackPaymentAttempt = (plan: string, billingPeriod: string, amount: number) => {
  track('checkout_payment_attempted', { 
    plan, 
    billingPeriod, 
    amount,
  });
};

/**
 * Track successful payment/conversion
 */
export const trackConversion = (plan: string, billingPeriod: string, amount: number, email?: string) => {
  track('checkout_payment_completed', { 
    plan, 
    billingPeriod, 
    amount,
    value: amount, // For GA conversion tracking
    currency: 'EUR',
  });

  // Send conversion to Google Ads if consent given
  const consent = getCookiePreferences();
  if (consent?.marketing && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL', // Replace with your Google Ads conversion ID
      'value': amount,
      'currency': 'EUR',
      'transaction_id': generateTransactionId(),
    });
  }
};

/**
 * Track CTA clicks (general)
 */
export const trackCTA = (ctaName: string, location: string) => {
  track('cta_clicked', { ctaName, location });
};

/**
 * Generate anonymous session ID
 */
const generateSessionId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Generate transaction ID
 */
const generateTransactionId = (): string => {
  return `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Initialize Google Analytics (only if consent given)
 */
export const initializeGoogleAnalytics = (measurementId: string) => {
  const consent = getCookiePreferences();
  
  if (!consent?.analytical) {
    console.log('📊 Google Analytics not initialized - no analytical consent');
    return;
  }

  // Load GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    anonymize_ip: true, // Privacy-friendly
    cookie_flags: 'SameSite=None;Secure',
  });

  console.log('📈 Google Analytics initialized');
};

/**
 * Initialize Hotjar (only if consent given)
 */
export const initializeHotjar = (hjid: number, hjsv: number) => {
  const consent = getCookiePreferences();
  
  if (!consent?.analytical) {
    console.log('🔥 Hotjar not initialized - no analytical consent');
    return;
  }

  (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
    h.hj = h.hj || function() {
      (h.hj.q = h.hj.q || []).push(arguments);
    };
    h._hjSettings = { hjid, hjsv };
    a = o.getElementsByTagName('head')[0];
    r = o.createElement('script');
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');

  console.log('🔥 Hotjar initialized');
};

// TypeScript declarations
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    hj: (...args: any[]) => void;
    _hjSettings: { hjid: number; hjsv: number };
  }
}
