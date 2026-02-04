'use client';

/**
 * Analytics Utility
 * Handles Google Analytics tracking with cookie consent
 */

import { getCookiePreferences } from './cookieConsent';

// Replace with your actual Google Analytics ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

/**
 * Initialize Google Analytics
 * This should be called on app load
 */
export const initializeAnalytics = (): void => {
  if (typeof window === 'undefined') return;

  // Check if analytics cookies are allowed
  const preferences = getCookiePreferences();
  const analyticsAllowed = preferences?.analytical ?? false;

  // Load Google Analytics script if not already loaded
  if (!document.getElementById('google-analytics-script')) {
    const script = document.createElement('script');
    script.id = 'google-analytics-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize gtag
    (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }
    (window as any).gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      'anonymize_ip': true, // Privacy-friendly: anonymize IPs
      'cookie_flags': 'SameSite=None;Secure', // GDPR compliant
      'analytics_storage': analyticsAllowed ? 'granted' : 'denied'
    });
  }
};

/**
 * Track page view
 */
export const trackPageView = (path: string): void => {
  const preferences = getCookiePreferences();
  if (!preferences?.analytical) return;

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_MEASUREMENT_ID, {
      'page_path': path
    });
  }
};

/**
 * Track custom event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: { [key: string]: any }
): void => {
  const preferences = getCookiePreferences();
  if (!preferences?.analytical) return;

  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

/**
 * Common event trackers
 */
export const analytics = {
  // Track button clicks
  trackButtonClick: (buttonName: string, location: string) => {
    trackEvent('button_click', {
      button_name: buttonName,
      location: location
    });
  },

  // Track form submissions
  trackFormSubmit: (formName: string) => {
    trackEvent('form_submit', {
      form_name: formName
    });
  },

  // Track pricing plan selection
  trackPlanSelection: (planName: string, billingPeriod: string) => {
    trackEvent('plan_selected', {
      plan_name: planName,
      billing_period: billingPeriod
    });
  },

  // Track checkout steps
  trackCheckoutStep: (step: number, stepName: string) => {
    trackEvent('checkout_progress', {
      step: step,
      step_name: stepName
    });
  },

  // Track purchase completion
  trackPurchase: (planName: string, value: number, currency: string = 'EUR') => {
    trackEvent('purchase', {
      transaction_id: `${Date.now()}-${Math.random()}`,
      value: value,
      currency: currency,
      items: [{
        item_name: planName,
        price: value
      }]
    });
  },

  // Track outbound links
  trackOutboundLink: (url: string, linkText: string) => {
    trackEvent('outbound_link', {
      url: url,
      link_text: linkText
    });
  },

  // Track video interactions
  trackVideoPlay: (videoName: string) => {
    trackEvent('video_play', {
      video_name: videoName
    });
  },

  // Track language change
  trackLanguageChange: (language: string) => {
    trackEvent('language_change', {
      language: language
    });
  },

  // Track audience choice (entry router)
  trackAudienceChoice: (audience: string) => {
    trackEvent('audience_choice', {
      audience: audience
    });
  }
};

// Export standalone functions for backwards compatibility
export const trackAudienceChoice = (audience: string) => {
  analytics.trackAudienceChoice(audience);
};

export const trackCTAClick = (ctaName: string, location: string) => {
  analytics.trackButtonClick(ctaName, location);
};

export const trackFormSubmission = (formName: string) => {
  analytics.trackFormSubmit(formName);
};