/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#9277FF",
          500: "#7C5DFA",
        },
        secondary: {
          400: "#252945",
          500: "#1E2139",
        },
        accent: {
          100: "#DFE3FA",
          200: "#888EB0",
          300: "#7E88C3",
          400: "#0C0E16",
        },
        error: {
          400: "#FF9797",
          500: "#EC5757",
        },
        light: "#f8f8fb",
        dark: "#141625",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ theme, addBase, addComponents }) {
      addBase({
        body: {
          color: theme("colors.black"),
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "18px",
          letterSpacing: "-0.1px",
        },
      });
      addComponents({
        ".heading-lg": {
          fontWeight: 700,
          fontSize: "36px",
          lineHeight: "33px",
          letterSpacing: "-1.125px",
        },
        ".heading-md": {
          fontWeight: 700,
          fontSize: "24px",
          lineHeight: "22px",
          letterSpacing: "-0.75px",
        },
        ".heading-sm": {
          fontWeight: 700,
          fontSize: "15px",
          lineHeight: "24px",
          letterSpacing: "-0.25px",
        },
        ".heading-sm-v": {
          fontWeight: 700,
          fontSize: "15px",
          lineHeight: "15px",
          letterSpacing: "-0.25px",
        },
        ".body-v": {
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "15px",
          letterSpacing: "-0.1px",
        },
      });
    }),
  ],
};
