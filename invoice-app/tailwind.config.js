/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#9277FF",
        "primary-hover": "#7C5DFA",
        // secondary: "#1E2139",
        // "secondary-hover": "#252945",
        // accent: "#DFE3FA",
        // "accent-hover": "#888EB0",
        error: "#EC5757",
        "error-hover": "#FF9797",
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
