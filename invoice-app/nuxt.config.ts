// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Frontend Mentor | Invoice App",
      link: [{ rel: "icon", type: "image/png", href: "/favicon-32x32.png" }],
    },
  },
  imports: { dirs: ["stores"] },
  modules: [
    "@formkit/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "nuxt-svg-icons",
  ],
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL,
  },

  headlessui: {
    prefix: "",
  },
  googleFonts: {
    families: {
      "League+Spartan": [500, 700],
      Poppins: [500, 700],
    },
  },
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  piniaPersistedstate: {
    storage: "localStorage",
  },
});
