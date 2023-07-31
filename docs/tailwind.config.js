/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [],
  theme: {
    colors: {
      primary: colors.sky,
      gray: colors.neutral,
      white: colors.white,
      black: colors.black,
      transparent: "transparent",
      current: "currentColor",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
