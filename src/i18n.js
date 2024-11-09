import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationAR from '../src/locales/ar/translate.json';
import translationFR from '../src/locales/fr/translate.json';

// the translations
const resources = {
  ar: {
    translation: translationAR
  },
  fr: {
    translation: translationFR
  }
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'ar', 
    fallbackLng: 'ar', 

    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;
