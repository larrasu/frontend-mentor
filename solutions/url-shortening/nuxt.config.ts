// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-icon",
    'nuxt-headlessui'
  ],

  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    },
  },
  headlessui: {
    prefix: ''
  }
});
