'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { I18nextProvider, useTranslation as useReactI18nextTranslation } from 'react-i18next';
import i18n from '@/i18n/i18n';

interface I18nContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize i18n on client side
    if (!i18n.isInitialized) {
      const savedLanguage = localStorage.getItem('language') || 'en';
      
      import('@/i18n/locales/en.json').then(en => {
        import('@/i18n/locales/nl.json').then(nl => {
          i18n
            .init({
              resources: {
                en: { translation: en.default },
                nl: { translation: nl.default },
              },
              lng: savedLanguage,
              fallbackLng: 'en',
              interpolation: {
                escapeValue: false,
              },
            })
            .then(() => {
              setIsInitialized(true);
              
              // Save language preference whenever it changes
              i18n.on('languageChanged', (lng) => {
                localStorage.setItem('language', lng);
              });
            });
        });
      });
    } else {
      setIsInitialized(true);
    }
  }, []);

  const setLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const t = (key: string): string => {
    return i18n.t(key);
  };

  if (!isInitialized) {
    return null; // or a loading spinner
  }

  return (
    <I18nextProvider i18n={i18n}>
      <I18nContext.Provider value={{ language: i18n.language, setLanguage, t }}>
        {children}
      </I18nContext.Provider>
    </I18nextProvider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
