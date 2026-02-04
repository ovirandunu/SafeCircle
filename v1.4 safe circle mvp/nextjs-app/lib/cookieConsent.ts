/**
 * Cookie Consent Management Utility
 */

export interface CookiePreferences {
  essential: boolean;
  analytical: boolean;
  marketing: boolean;
}

const COOKIE_PREFERENCES_KEY = 'cookiePreferences';

/**
 * Get current cookie preferences from localStorage
 */
export const getCookiePreferences = (): CookiePreferences | null => {
  if (typeof window === 'undefined') return null;
  
  const stored = localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!stored) return null;
  
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

/**
 * Save cookie preferences to localStorage
 */
export const saveCookiePreferences = (preferences: CookiePreferences) => {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
  
  // Dispatch custom event so other parts of the app can react
  window.dispatchEvent(new CustomEvent('cookieConsentChanged', {
    detail: preferences,
  }));
};

/**
 * Check if user has made a choice about cookies
 */
export const hasConsentChoice = (): boolean => {
  return getCookiePreferences() !== null;
};

/**
 * Check if user has given any form of consent
 * @deprecated Use hasConsentChoice instead
 */
export const hasGivenConsent = hasConsentChoice;

/**
 * Accept all cookies
 */
export const acceptAllCookies = () => {
  saveCookiePreferences({
    essential: true,
    analytical: true,
    marketing: true,
  });
};

/**
 * Accept only essential cookies
 */
export const acceptEssentialOnly = () => {
  saveCookiePreferences({
    essential: true,
    analytical: false,
    marketing: false,
  });
};
