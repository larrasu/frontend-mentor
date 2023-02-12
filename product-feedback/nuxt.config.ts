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
  },
  imports: {
    dirs: ["stores"],
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
  ],
  typescript: {
    shim: false,
  },
  // Module configs
  googleFonts: {
    families: {
      Jost: [500, 600, 700],
    },
  },
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
});
