'use client';

import { useState, useEffect } from 'react';
import { X, Settings, Cookie, Shield, BarChart3, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { 
  getCookiePreferences, 
  saveCookiePreferences, 
  hasGivenConsent,
  CookiePreferences 
} from '@/lib/cookieConsent';

export default function CookieConsent() {
  const { t, i18n } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Always required
    analytical: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = hasGivenConsent();
    const savedPreferences = getCookiePreferences();

    if (!consentGiven) {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    } else if (savedPreferences) {
      // Load saved preferences
      setPreferences(savedPreferences);
    }
  }, []);

  const applyConsent = (prefs: CookiePreferences) => {
    // Apply cookie preferences to tracking scripts
    if (typeof window !== 'undefined') {
      // Google Analytics example
      if (prefs.analytical) {
        // Enable Google Analytics
        // window.gtag('consent', 'update', {
        //   'analytics_storage': 'granted'
        // });
        console.log('Analytics cookies enabled');
      } else {
        // Disable Google Analytics
        // window.gtag('consent', 'update', {
        //   'analytics_storage': 'denied'
        // });
        console.log('Analytics cookies disabled');
      }

      // Marketing/Advertising cookies
      if (prefs.marketing) {
        // Enable marketing pixels (Facebook, LinkedIn, etc.)
        // window.gtag('consent', 'update', {
        //   'ad_storage': 'granted'
        // });
        console.log('Marketing cookies enabled');
      } else {
        // Disable marketing pixels
        // window.gtag('consent', 'update', {
        //   'ad_storage': 'denied'
        // });
        console.log('Marketing cookies disabled');
      }
    }
  };

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      analytical: true,
      marketing: true
    };
    savePreferences(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      essential: true,
      analytical: false,
      marketing: false
    };
    savePreferences(onlyNecessary);
  };

  const handleSavePreferences = () => {
    savePreferences(preferences);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    saveCookiePreferences(prefs);
    setPreferences(prefs);
    applyConsent(prefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === 'essential') return; // Essential cookies cannot be disabled
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay for settings modal */}
      {showSettings && (
        <div 
          className="fixed inset-0 bg-black/50 z-[9998]"
          onClick={() => setShowSettings(false)}
        />
      )}

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] animate-slide-up">
        {/* Settings Panel */}
        {showSettings && (
          <div className="bg-white border-t-[2px] border-black mx-auto max-w-[1200px] animate-slide-up">
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Settings className="w-6 h-6 text-[#f8918a]" />
                  <h3 className="font-['Open_Sans:Bold',sans-serif] text-[20px] sm:text-[24px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                    {i18n.language === 'nl' ? 'Cookie Instellingen' : 'Cookie Settings'}
                  </h3>
                </div>
                <button
                  onClick={() => setShowSettings(false)}
                  className="text-[#838383] hover:text-[#323232] transition-colors"
                  aria-label="Close settings"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <p className="font-['Open_Sans:Regular',sans-serif] text-[14px] text-[#838383] mb-6" style={{ fontVariationSettings: "'wdth' 100" }}>
                {i18n.language === 'nl' 
                  ? 'We gebruiken cookies om je ervaring te verbeteren. Kies hieronder welke cookies je wilt toestaan.'
                  : 'We use cookies to improve your experience. Choose which cookies you want to allow below.'}
              </p>

              {/* Cookie Categories */}
              <div className="space-y-4">
                {/* Necessary Cookies */}
                <div className="bg-[#f5f5f5] border-[2px] border-[#e0e0e0] rounded-[8px] p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-[#323232]" />
                        <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {i18n.language === 'nl' ? 'Noodzakelijke Cookies' : 'Necessary Cookies'}
                        </h4>
                        <span className="text-[11px] bg-[#323232] text-white px-2 py-1 rounded-[4px] font-['Open_Sans:SemiBold',sans-serif]">
                          {i18n.language === 'nl' ? 'VERPLICHT' : 'REQUIRED'}
                        </span>
                      </div>
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {i18n.language === 'nl'
                          ? 'Deze cookies zijn essentieel voor het functioneren van de website en kunnen niet worden uitgeschakeld. Ze slaan geen persoonlijk identificeerbare informatie op.'
                          : 'These cookies are essential for the website to function and cannot be disabled. They do not store any personally identifiable information.'}
                      </p>
                    </div>
                    <div className="ml-4">
                      <div className="w-12 h-6 bg-[#f8918a] rounded-full relative cursor-not-allowed opacity-50">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analytical Cookies */}
                <div className="bg-white border-[2px] border-black rounded-[8px] p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-5 h-5 text-[#f8918a]" />
                        <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {i18n.language === 'nl' ? 'Analytische Cookies' : 'Analytical Cookies'}
                        </h4>
                      </div>
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {i18n.language === 'nl'
                          ? 'Deze cookies helpen ons te begrijpen hoe bezoekers de website gebruiken, zodat we deze kunnen verbeteren. Alle data is geanonimiseerd.'
                          : 'These cookies help us understand how visitors use the website so we can improve it. All data is anonymized.'}
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference('analytical')}
                        className={`w-12 h-6 rounded-full relative transition-colors ${
                          preferences.analytical ? 'bg-[#f8918a]' : 'bg-[#e0e0e0]'
                        }`}
                        aria-label="Toggle analytical cookies"
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.analytical ? 'right-1' : 'left-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-white border-[2px] border-black rounded-[8px] p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-5 h-5 text-[#f8918a]" />
                        <h4 className="font-['Open_Sans:SemiBold',sans-serif] text-[16px] text-[#323232]" style={{ fontVariationSettings: "'wdth' 100" }}>
                          {i18n.language === 'nl' ? 'Marketing Cookies' : 'Marketing Cookies'}
                        </h4>
                      </div>
                      <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] text-[#838383]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        {i18n.language === 'nl'
                          ? 'Deze cookies worden gebruikt om advertenties te tonen die relevant voor je zijn. Ze volgen je bezoeken aan onze website.'
                          : 'These cookies are used to show you ads that are relevant to you. They track your visits to our website.'}
                      </p>
                    </div>
                    <div className="ml-4">
                      <button
                        onClick={() => togglePreference('marketing')}
                        className={`w-12 h-6 rounded-full relative transition-colors ${
                          preferences.marketing ? 'bg-[#f8918a]' : 'bg-[#e0e0e0]'
                        }`}
                        aria-label="Toggle marketing cookies"
                      >
                        <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
                          preferences.marketing ? 'right-1' : 'left-1'
                        }`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Settings Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <button
                  onClick={handleSavePreferences}
                  className="flex-1 bg-[#f8918a] text-white h-[48px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] hover:bg-[#f9675d] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {i18n.language === 'nl' ? 'Voorkeuren Opslaan' : 'Save Preferences'}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 bg-white border-[2px] border-black text-[#323232] h-[48px] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[16px] hover:bg-[#f5f5f5] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {i18n.language === 'nl' ? 'Accepteer Alles' : 'Accept All'}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Banner */}
        <div className="bg-white border-t-[2px] border-black shadow-lg">
          <div className="max-w-[1200px] mx-auto p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Icon and Text */}
              <div className="flex-1">
                <div className="flex items-start gap-3">
                  <Cookie className="w-6 h-6 text-[#f8918a] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-['Open_Sans:Bold',sans-serif] text-[16px] sm:text-[18px] text-[#323232] mb-2" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {i18n.language === 'nl' ? 'Over cookies op deze website' : 'About cookies on this website'}
                    </h3>
                    <p className="font-['Open_Sans:Regular',sans-serif] text-[13px] sm:text-[14px] text-[#838383] leading-relaxed" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {i18n.language === 'nl'
                        ? 'We gebruiken cookies om deze website goed te laten werken en te verbeteren. Door op \'Alles accepteren\' te klikken, ga je akkoord met het gebruik van alle cookies. Je kunt je voorkeuren altijd aanpassen via de instellingen.'
                        : 'We use cookies to make this website work properly and to improve it. By clicking "Accept all", you agree to the use of all cookies. You can change your preferences at any time in settings.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setShowSettings(true)}
                  className="w-full sm:w-auto px-6 h-[44px] bg-white border-[2px] border-black rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#323232] hover:bg-[#f5f5f5] transition-colors flex items-center justify-center gap-2"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  <Settings className="w-4 h-4" />
                  {i18n.language === 'nl' ? 'Instellingen' : 'Settings'}
                </button>
                <button
                  onClick={handleRejectAll}
                  className="w-full sm:w-auto px-6 h-[44px] bg-white border-[2px] border-[#e0e0e0] rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[14px] text-[#838383] hover:bg-[#f5f5f5] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {i18n.language === 'nl' ? 'Alleen Noodzakelijk' : 'Only Necessary'}
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-6 h-[44px] bg-[#f8918a] text-white rounded-[8px] font-['Open_Sans:SemiBold',sans-serif] text-[14px] hover:bg-[#f9675d] transition-colors"
                  style={{ fontVariationSettings: "'wdth' 100" }}
                >
                  {i18n.language === 'nl' ? 'Accepteer Alles' : 'Accept All'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </>
  );
}