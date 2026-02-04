'use client';

import { useState, useEffect } from 'react';
import { hasConsentChoice, acceptAllCookies, acceptEssentialOnly } from '@/lib/cookieConsent';

export function CookieConsentWrapper() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(!hasConsentChoice());
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-semibold text-lg mb-2">Cookie Preferences</h3>
          <p className="text-sm text-gray-600">
            We use cookies to enhance your experience. Essential cookies are required for the site to function.
            Analytical cookies help us improve our service.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => {
              acceptEssentialOnly();
              setShowBanner(false);
            }}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Essential Only
          </button>
          <button
            onClick={() => {
              acceptAllCookies();
              setShowBanner(false);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
