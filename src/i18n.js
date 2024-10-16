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
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'ar', // default language
    fallbackLng: 'ar', // fallback language if translation is not found

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
