/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-header":
          "url('~/assets/suggestions/mobile/background-header.png')",
        "tablet-header":
          "url('~/assets/suggestions/tablet/background-header.png')",
        "desktop-header":
          "url('~/assets/suggestions/desktop/background-header.png')",
      },
      boxShadow: {
        base: "0px 10px 40px -7px rgba(55, 63, 104, 0.350492)",
      },
      colors: {
        primary: {
          100: "#C75AF6",
          200: "#AD1FEA",
        },
        secondary: {
          100: "#7C91F9",
          200: "#4661E6",
        },
        tertiary: {
          100: "#656EA3",
          200: "#3A4374",
        },
        error: {
          100: "#E98888",
          200: "#D73737",
        },
        base: {
          100: "#F7F8FD",
          200: "#F2F4FF",
          300: "#CFD7FF",
        },
        accent: {
          100: "#647196",
          200: "#3A4374",
        },
        orange: "#F49F85",
        cyan: "#62BCFA",
      },
    },
    fontFamily: {
      sans: ["Jost", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
