/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fbaf85",
          200: "#D87D4A",
        },
        accent: {
          100: "#FAFAFA",
          200: "#F1F1F1",
        },
        dark: "#101010",
        error: "#CD2C2C",
      },
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    plugin(function ({ addBase, addComponents }) {
      addBase({
        h1: {
          "font-bold uppercase text-[56px] leading-[58px] tracking-[2px]": "",
        },
        h2: {
          "font-bold uppercase text-[40px] leading-[44px] tracking-[1.5px]": "",
        },
        h3: {
          "font-bold uppercase text-[32px] leading-[36px] tracking-[1.15px]":
            "",
        },
        h4: {
          "font-bold uppercase text-[28px] leading-[38px] tracking-[2px]": "",
        },
        h5: {
          "font-bold uppercase text-[24px] leading-[33px] tracking-[1.7px]": "",
        },
        h6: {
          "font-bold uppercase text-[18px] leading-[24px] tracking-[1.3px]": "",
        },
        p: {
          "font-medium text-[15px] leading-[25px]": "",
        },
      });
      addComponents({
        ".overline": {
          "uppercase text-[14px] leading-[19px] tracking-[10px]": "",
        },
        ".subtitle": {
          "font-bold uppercase text-[13px] leading-[25px] tracking-[1px]": "",
        },
        // Buttons
        ".btn": {
          "transition px-[30px] py-[16px] font-bold text-[13px] tracking-[1px]":
            "",
        },
        ".btn-primary": {
          "btn bg-primary-200 text-white hover:bg-primary-100": "",
        },
        ".btn-outline": {
          "btn border-[1px] border-black text-black hover:bg-black hover:text-white":
            "",
        },
        ".btn-clear": {
          "btn text-black/50 hover:text-primary-200": "",
        },
        ".btn-icon": {
          "flex items-center gap-[14px]": "",
        },
        // Inputs
        ".input": {
          "transition text-[14px] tracking-[-0.25px] text-black placeholder:text-black/40 border-[1px] border-[#CFCFCF] rounded-[8px] px-[24px] py-[18px] focus:border-primary-200 invalid:border-error":
            "",
        },
        ".label": {
          "font-bold text-[12px] tracking-[-0.21px]": "",
        },
        ".msg": {
          "font-medium text-[12px] tracking-[-0.21px]": "",
        },
      });
    }),
  ],
};
