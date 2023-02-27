/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#2BD0D0",
        secondary: "#4B3F6B",
        tertiary: "#3A3054",
        error: "#F46363",
        dark: "#34313D",
        neutral: "#9E9AA8",
        light: "#EFF1F7",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ theme, addBase, addComponents }) {
      addBase({
        body: {
          fontSize: "18px",
        },
      }),
        addComponents({});
    }),
  ],
};
