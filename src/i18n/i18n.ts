import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en';
import zh from './locales/zh_tw';

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },

  debug: true,
  resources: {
    zh: {
      translation: zh,
    },
    en: {
      translation: en,
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  // react: {
  //   wait: false,
  //   bindI18n: 'languageChanged loaded',
  //   bindStore: 'added removed',
  //   nsMode: 'default'
  // },
};

i18n
  .use(LanguageDetector)
  .init(options)
  // .changeLanguage('en', (err: any, t: any) => {
  //   if (err) return console.log('something went wrong loading', err);
  // });

export default i18n;
console.log({
  i18n
})