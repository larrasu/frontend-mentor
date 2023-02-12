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
  typescript: {
    shim: false,
  },
});
