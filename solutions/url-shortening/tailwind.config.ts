import type { Config } from "tailwindcss";

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#2BD0D0",
        gray: {
          DEFAULT: "#EFF1F7",
          dark: "#9E9AA8",
        },
        violet: {
          DEFAULT: "#4B3F6B",
          dark: "#3A3054",
        },
        dark: "#34313D",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
} satisfies Config;
