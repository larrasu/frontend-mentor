// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon-32x32.png" }],
    },
  },
  devtools: { enabled: true },
  modules: [
    // "@hebilicious/authjs-nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-svgo",
  ],
  googleFonts: { families: { Jost: [400, 500, 600, 700] } },
  headlessui: { prefix: '' }
});
