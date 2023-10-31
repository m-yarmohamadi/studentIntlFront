import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./en";
import persian from "./fa";
import arabic from "./ar";

const resources = {
  english: {
    translation: english,
  },
  persian: {
    translation: persian,
  },
  arabic: {
    translation: arabic,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "english",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
