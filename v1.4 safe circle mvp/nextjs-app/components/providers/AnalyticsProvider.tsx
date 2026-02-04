'use client';

import { useEffect, ReactNode } from 'react';
import { getCookiePreferences } from '@/lib/cookieConsent';
import { initializeGoogleAnalytics, initializeHotjar, initializeClarity } from '@/lib/tracking';

export function AnalyticsProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const initializeAnalytics = () => {
      const consent = getCookiePreferences();
      
      if (consent?.analytical) {
        // Initialize Google Analytics
        const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
        if (gaId) {
          initializeGoogleAnalytics(gaId);
        }
        
        // Initialize Hotjar
        const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;
        const hotjarVersion = process.env.NEXT_PUBLIC_HOTJAR_VERSION;
        if (hotjarId && hotjarVersion) {
          initializeHotjar(parseInt(hotjarId), parseInt(hotjarVersion));
        }

        // Initialize Clarity
        const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
        if (clarityId) {
          initializeClarity(clarityId);
        }
      }
    };

    initializeAnalytics();

    // Listen for consent changes
    window.addEventListener('cookieConsentChanged', initializeAnalytics);
    
    return () => {
      window.removeEventListener('cookieConsentChanged', initializeAnalytics);
    };
  }, []);

  return <>{children}</>;
}
