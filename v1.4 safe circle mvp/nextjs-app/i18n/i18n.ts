import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Create i18n instance without initializing
// Will be initialized in I18nProvider on client side
i18n.use(initReactI18next);

export default i18n;
