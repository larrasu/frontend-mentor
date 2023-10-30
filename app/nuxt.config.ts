// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["@nuxt-themes/typography"],
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],
  googleFonts: {
    families: { Inter: [400, 500, 600] },
  },
});
