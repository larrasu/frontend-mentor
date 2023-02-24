/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "",
      },
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwindcss/forms"),
    plugin(function ({ theme, addBase, addComponents, addUtilities }) {
      addComponents({});
    }),
  ],
};
