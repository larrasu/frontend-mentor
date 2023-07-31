/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: colors.white,
      black: colors.black,
      primary: {
        DEFAULT: "#AD1FEA",
        light: "#C75AF6",
      },
      secondary: {
        DEFAULT: "#4661E6",
        light: "#7C91F9",
      },
      accent: {
        DEFAULT: "#3A4374",
        light: "#656EA3",
      },
      error: {
        DEFAULT: "#D73737",
        light: "#E98888",
      },
    },
    fontFamily: { sans: ["Jost", "sans-serif"] },
  },
  plugins: [require("@tailwindcss/forms")],
};
