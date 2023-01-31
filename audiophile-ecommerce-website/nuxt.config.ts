// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Frontend Mentor | Audiophile E-commerce Website",
      link: [{ rel: "icon", type: "image/png", href: "/favicon-32x32.png" }],
    },
  },
  imports: {
    dirs: ["stores"],
  },
  modules: [
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  headlessui: {
    prefix: "",
  },
  googleFonts: {
    families: {
      Manrope: [400, 500, 700],
    },
  },
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
});
