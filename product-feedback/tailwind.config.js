/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
      borderRadius: {
        base: "10px",
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
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({});
      addComponents({
        ".btn": {
          borderRadius: theme("borderRadius.base"),
          padding: "6px 16px",
          display: "flex",
          alignItems: "center",
          "@apply transition": "",
        },
        ".btn-primary": {
          "@apply btn": "",
          backgroundColor: theme("colors.primary.200"),
          color: theme("colors.base.100"),
          "&:hover": {
            backgroundColor: theme("colors.primary.100"),
          },
        },
        ".btn-secondary": {
          "@apply btn": "",
          backgroundColor: theme("colors.secondary.200"),
          color: theme("colors.base.100"),
          "&:hover": {
            backgroundColor: theme("colors.secondary.100"),
          },
        },
        ".btn-tertiary": {
          "@apply btn": "",
          backgroundColor: theme("colors.tertiary.200"),
          color: theme("colors.base.100"),
          "&:hover": {
            backgroundColor: theme("colors.tertiary.100"),
          },
        },
        ".btn-error": {
          "@apply btn": "",
          backgroundColor: theme("colors.error.200"),
          color: theme("colors.base.100"),
          "&:hover": {
            backgroundColor: theme("colors.error.100"),
          },
        },
        ".btn-plain": {
          "@apply btn": "",
          backgroundColor: theme("colors.base.200"),
          color: theme("colors.accent.200"),
          "&:hover": {
            backgroundColor: theme("colors.base.300"),
          },
          "&.active": {
            backgroundColor: theme("colors.secondary.200"),
            color: theme("colors.base.100"),
          },
          "> icon:first-child, > p:first-child": {
            color: theme("colors.secondary.200"),
            "&:hover": {
              color: theme("colors.base.100"),
            },
          },
        },

        ".link": {
          textDecoration: "underline",
          color: theme("colors.secondary.200"),
          "&:hover": {
            color: theme("colors.secondary.100"),
          },
        },
      });
    }),
  ],
};
