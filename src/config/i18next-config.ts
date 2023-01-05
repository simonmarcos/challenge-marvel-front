import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import global_es from "../i18n/es/global.json";
import login_es from "../i18n/es/login.json";
import character_es from "../i18n/es/character.json";
import drawer_es from "../i18n/es/drawer.json";
import home_es from "../i18n/es/home.json";
import navbar_es from "../i18n/es/navbar.json";

import global_en from "../i18n/en/global.json";
import login_en from "../i18n/en/login.json";
import character_en from "../i18n/en/character.json";
import drawer_en from "../i18n/en/drawer.json";
import home_en from "../i18n/en/home.json";
import navbar_en from "../i18n/en/navbar.json";

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
      login: login_es,
      character: character_es,
      drawer: drawer_es,
      home: home_es,
      navbar: navbar_es,
    },
    en: {
      global: global_en,
      login: login_en,
      character: character_en,
      drawer: drawer_en,
      home: home_en,
      navbar: navbar_en,
    },
  },
});
