// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Frontend Mentor | Product Feedback App",
      link: [{ rel: "icon", type: "image/png", href: "/favicon-32x32.png" }],
    },
    pageTransition: {
      name: "fade",
      mode: "out-in",
    },
  },
  imports: { dirs: ["stores"] },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-headlessui",
    "nuxt-icon",
    "nuxt-svg-icons",
  ],

  headlessui: {
    prefix: "",
  },
  googleFonts: {
    families: {
      Jost: [400, 500, 600, 700],
    },
  },
  nuxtSvgIcons: {
    svg4vue: {
      assetsDirName: "assets/icons",
    },
  },
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
});
