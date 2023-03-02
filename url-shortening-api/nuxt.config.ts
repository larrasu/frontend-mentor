// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Frontend Mentor | Shortly URL Shortening API",
      link: [{ rel: "favicon", type: "image/png", href: "/favicon-32x32.png" }],
    },
  },
  modules: [
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "nuxt-svg-icons",
  ],
  googleFonts: {
    families: {
      Poppins: [500, 700],
    },
  },
});
