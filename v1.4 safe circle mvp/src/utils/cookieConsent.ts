/**
 * Cookie Consent Utility
 * Manages cookie consent preferences and tracking integration
 */

export interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytical: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'safecircle_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'safecircle_cookie_preferences';

/**
 * Get current cookie preferences from localStorage
 */
export const getCookiePreferences = (): CookiePreferences | null => {
  if (typeof window === 'undefined') return null;
  
  const saved = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!saved) return null;
  
  try {
    return JSON.parse(saved);
  } catch {
    return null;
  }
};

/**
 * Check if user has given consent
 */
export const hasGivenConsent = (): boolean => {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(COOKIE_CONSENT_KEY) === 'true';
};

/**
 * Save cookie preferences
 */
export const saveCookiePreferences = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
  
  // Apply preferences to tracking systems
  applyTrackingConsent(preferences);
  
  // Emit event for analytics initialization
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: preferences }));
};

/**
 * Apply tracking consent to various analytics and marketing platforms
 */
export const applyTrackingConsent = (preferences: CookiePreferences): void => {
  if (typeof window === 'undefined') return;

  // Google Analytics (gtag.js)
  if (preferences.analytical) {
    enableGoogleAnalytics();
  } else {
    disableGoogleAnalytics();
  }

  // Marketing/Advertising
  if (preferences.marketing) {
    enableMarketingCookies();
  } else {
    disableMarketingCookies();
  }

  // Functional cookies
  if (preferences.functional) {
    enableFunctionalCookies();
  } else {
    disableFunctionalCookies();
  }
};

/**
 * Google Analytics integration
 */
const enableGoogleAnalytics = (): void => {
  // Check if gtag is available
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
    console.log('[Cookie Consent] Google Analytics enabled');
  } else {
    // If gtag not loaded yet, queue the consent
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(['consent', 'default', {
      'analytics_storage': 'granted'
    }]);
  }
};

const disableGoogleAnalytics = (): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
    console.log('[Cookie Consent] Google Analytics disabled');
  } else {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(['consent', 'default', {
      'analytics_storage': 'denied'
    }]);
  }
};

/**
 * Marketing cookies integration (Facebook Pixel, LinkedIn, etc.)
 */
const enableMarketingCookies = (): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted'
    });
    console.log('[Cookie Consent] Marketing cookies enabled');
  }

  // Facebook Pixel
  if ((window as any).fbq) {
    (window as any).fbq('consent', 'grant');
  }

  // LinkedIn Insight Tag
  if ((window as any)._linkedin_data_partner_ids) {
    console.log('[Cookie Consent] LinkedIn Insight Tag enabled');
  }
};

const disableMarketingCookies = (): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('consent', 'update', {
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
    console.log('[Cookie Consent] Marketing cookies disabled');
  }

  // Facebook Pixel
  if ((window as any).fbq) {
    (window as any).fbq('consent', 'revoke');
  }
};

/**
 * Functional cookies integration (chat widgets, video players, etc.)
 */
const enableFunctionalCookies = (): void => {
  console.log('[Cookie Consent] Functional cookies enabled');
  
  // Enable chat widgets (Intercom, Crisp, etc.)
  if ((window as any).Intercom) {
    (window as any).Intercom('boot');
  }
  
  // Enable video embeds with cookies
  // This would re-enable YouTube/Vimeo embeds with tracking
};

const disableFunctionalCookies = (): void => {
  console.log('[Cookie Consent] Functional cookies disabled');
  
  // Disable chat widgets
  if ((window as any).Intercom) {
    (window as any).Intercom('shutdown');
  }
};

/**
 * Reset all cookie preferences (useful for testing or privacy policy updates)
 */
export const resetCookieConsent = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  localStorage.removeItem(COOKIE_PREFERENCES_KEY);
  
  // Reload page to show banner again
  window.location.reload();
};

/**
 * Initialize tracking on page load based on saved preferences
 */
export const initializeTracking = (): void => {
  const preferences = getCookiePreferences();
  
  if (preferences) {
    applyTrackingConsent(preferences);
  } else {
    // Default to denied until user gives consent (GDPR compliant)
    const deniedPreferences: CookiePreferences = {
      necessary: true,
      functional: false,
      analytical: false,
      marketing: false
    };
    applyTrackingConsent(deniedPreferences);
  }
};
