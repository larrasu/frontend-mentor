import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        "boost-desktop": "url('~/assets/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('~/assets/images/bg-boost-mobile.svg')",
        "shorten-desktop": "url('~/assets/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('~/assets/images/bg-shorten-mobile.svg')",
      },
      colors: {
        primary: { DEFAULT: "#2BD0D0", hover: "#9AE3E3" },
        gray: {
          DEFAULT: "#EFF1F7",
          dark: "#9E9AA8",
        },
        error: {
          DEFAULT: "#F46363",
        },
        violet: {
          DEFAULT: "#4B3F6B",
          dark: "#3A3054",
        },
        dark: "#34313D",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
