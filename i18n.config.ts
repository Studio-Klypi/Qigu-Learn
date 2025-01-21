import fr from "assets/i18n/fr";
import en from "assets/i18n/en";
import de from "assets/i18n/de";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "fr",
  messages: {
    fr,
    en,
    de,
  },
}));
