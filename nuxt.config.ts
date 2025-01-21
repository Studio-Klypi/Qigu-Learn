// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "shadcn-nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
  ],
  ssr: false,
  devtools: { enabled: true },
  colorMode: {
    classSuffix: "",
  },
  compatibilityDate: "2024-11-01",
  eslint: {
    checker: true,
    config: {
      stylistic: {
        indent: 2,
        semi: true,
        quotes: "double",
      },
    },
  },
  googleFonts: {
    families: {
      Barlow: {
        wght: "100..900",
        ital: "100..900",
      },
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: ["fr", "en", "de"],
    defaultLocale: "fr",
  },
  tailwindcss: {
    cssPath: ["assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config",
    exposeConfig: false,
    viewer: false,
  },
});
