import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RICKY from './locales/ricky';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      ricky: { translation: RICKY },
    },
    fallbackLng: 'ricky',
    preload: ['ricky'],//在这里添加你们的locales表
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;