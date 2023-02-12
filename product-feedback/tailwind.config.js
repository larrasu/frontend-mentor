/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#C75AF6",
          200: "#AD1FEA",
        },
      },
    },
  },
  daisyui: {
    styled: false,
  },
  plugins: [require("daisyui")],
};
