/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-header":
          "url('~/assets/images/suggestions/mobile/background-header.png')",
        "tablet-header":
          "url('~/assets/images/suggestions/tablet/background-header.png')",
        "desktop-header":
          "url('~/assets/images/suggestions/desktop/background-header.png')",
      },
      borderRadius: {
        base: "10px",
      },
      boxShadow: {
        base: "0px 10px 40px -7px rgba(55, 63, 104, 0.350492)",
      },
      colors: {
        primary: "#AD1FEA",
        "primary-focus": "#C75AF6",
        secondary: "#4661E6",
        "secondary-focus": "#7C91F9",
        tertiary: "#3A4374",
        "tertiary-focus": "#656EA3",
        error: "#D73737",
        "error-focus": "#E98888",
        "base-100": "#FFFFFF",
        "base-200": "#F7F8FD",
        "base-300": "#F2F4FF",
        "base-400": "#CFD7FF",
        "dark-100": "#647196",
        "dark-200": "#3A4374",
        orange: "#F49F85",
        cyan: "#62BCFA",
      },
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ theme, addComponents, addUtilities }) {
      addComponents({
        ".btn": {
          "@apply transition": "",
          borderRadius: theme("borderRadius.base"),
          color: theme("colors.base-100"),
          cursor: "pointer",
          padding: "12px 24px",
          "&:disabled": {
            cursor: "not-allowed",
          },
        },
        ".btn-sm": {
          padding: "6px 12px",
        },
        ".btn-primary": {
          "@apply btn": "",
          backgroundColor: theme("colors.primary"),
          "&:hover": {
            backgroundColor: theme("colors.primary-focus"),
          },
        },
        ".btn-secondary": {
          "@apply btn": "",
          backgroundColor: theme("colors.secondary"),
          "&:hover": {
            backgroundColor: theme("colors.secondary-focus"),
          },
        },
        ".btn-tertiary": {
          "@apply btn": "",
          backgroundColor: theme("colors.tertiary"),
          "&:hover": {
            backgroundColor: theme("colors.tertiary-focus"),
          },
        },
        ".btn-error": {
          "@apply btn": "",
          backgroundColor: theme("colors.error"),
          "&:hover": {
            backgroundColor: theme("colors.error-focus"),
          },
        },
        ".btn-ghost": {
          "@apply btn": "",
          color: theme("colors.dark-100"),
          "&:hover": {
            textDecoration: "underline",
          },
        },
        ".btn-dark": {
          "@apply btn": "",
          backgroundColor: theme("colors.dark-200"),
          "&:hover": {
            textDecoration: "underline",
          },
        },
        ".btn-plain": {
          "@apply btn": "",
          backgroundColor: theme("colors.base-300"),
          color: theme("colors.dark-200"),
          "&:hover": {
            backgroundColor: theme("colors.base-400"),
            color: theme("colors.dark-200"),
          },
          "&:focus": {
            backgroundColor: theme("colors.secondary"),
            color: theme("colors.base-100"),
          },
        },
        // Link
        ".link": {
          color: theme("colors.secondary"),
          fontWeight: 600,
          textDecoration: "underline",
        },
        // Badges
        ".badge": {
          padding: "6px 12px",
        },
        ".badge-plain": {
          "@apply badge": "",
          backgroundColor: theme("colors.base-300"),
          color: theme("colors.dark-200"),
        },
      });
      addUtilities({
        ".across": {
          display: "flex",
          alignItems: "center",
          justifyContent: "between",
        },
      });
    }),
  ],
};
