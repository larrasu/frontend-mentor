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
  modules: [
    "@formkit/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "nuxt-headlessui",
    "nuxt-svg-icons",
  ],

  googleFonts: {
    families: {
      "League+Spartan": [500, 700],
      Poppins: [500, 700],
    },
  },
});
