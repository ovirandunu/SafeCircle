import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import '../i18n/i18n'; // Initialize i18n
import CookieConsent from './components/CookieConsent';
import { trackPageView, initializeGoogleAnalytics, initializeHotjar } from '../utils/tracking';
import { getCookiePreferences } from '../utils/cookieConsent';
import EntryRouter from './pages/EntryRouter';
import LiveAlonePage from './pages/LiveAlonePage_NEW';
import WorryAboutSomeonePage from './pages/WorryAboutSomeonePage_REBUILD';
import LandingPage from './pages/LandingPage';
import SmartDevices from './pages/SmartDevices';
import SmartDevicesNL from './pages/SmartDevicesNL';
import HelpCenter from './pages/HelpCenter';
import HelpCenterNL from './pages/HelpCenterNL';
import TrustedContacts from './pages/TrustedContacts';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PrivacyPolicyNL from './pages/PrivacyPolicyNL';
import TermsOfService from './pages/TermsOfService';
import TermsOfServiceNL from './pages/TermsOfServiceNL';
import Security from './pages/Security';
import SecurityNL from './pages/SecurityNL';
import Checkout from './pages/Checkout';
import MockupsPage from './pages/MockupsPage';
import AppScreenshots from './pages/AppScreenshots';
import DesignSystem from './pages/DesignSystem';
import DesignSystemFigma from './pages/DesignSystemFigma';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view whenever route changes
    trackPageView(pathname);
  }, [pathname]);

  return null;
}

function AnalyticsInitializer() {
  useEffect(() => {
    // Initialize analytics on mount and when consent changes
    const initializeAnalytics = () => {
      const consent = getCookiePreferences();
      
      if (consent?.analytical) {
        // Initialize Google Analytics with environment variable
        const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
        if (gaId) {
          initializeGoogleAnalytics(gaId);
        } else {
          console.warn('GA_MEASUREMENT_ID not found in environment variables');
        }
        
        // Initialize Hotjar (optional - for heatmaps)
        const hotjarId = import.meta.env.VITE_HOTJAR_ID;
        const hotjarVersion = import.meta.env.VITE_HOTJAR_VERSION;
        if (hotjarId && hotjarVersion) {
          initializeHotjar(parseInt(hotjarId), parseInt(hotjarVersion));
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

  return null;
}

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <ScrollToTop />
        <AnalyticsInitializer />
        <Routes>
          <Route path="/" element={<LiveAlonePage />} />
          <Route path="/live-alone" element={<LiveAlonePage />} />
          <Route path="/worry-about-someone" element={<WorryAboutSomeonePage />} />
          <Route path="/entry" element={<EntryRouter />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/smart-devices" element={<SmartDevices />} />
          <Route path="/smart-devices-nl" element={<SmartDevicesNL />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/help-center-nl" element={<HelpCenterNL />} />
          <Route path="/trusted-contacts" element={<TrustedContacts />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-nl" element={<PrivacyPolicyNL />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/terms-nl" element={<TermsOfServiceNL />} />
          <Route path="/security" element={<Security />} />
          <Route path="/security-nl" element={<SecurityNL />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/mockups" element={<MockupsPage />} />
          <Route path="/screenshots" element={<AppScreenshots />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/design-system-figma" element={<DesignSystemFigma />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </div>
  );
}