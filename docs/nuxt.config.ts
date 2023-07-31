// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
  ],
  colorMode: { classSuffix: "" },
  content: { documentDriven: true },
  googleFonts: { families: { Inter: [400, 500, 600, 700, 800] } },
  typescript: {
    shim: false,
  },
});
