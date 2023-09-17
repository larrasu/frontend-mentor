import type { Config } from 'tailwindcss';

export default {
  content: [],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      primary: {
        DEFAULT: '#AD1FEA',
        hover: '#C75AF6',
      },
      secondary: {
        DEFAULT: '#4661E6',
        hover: '#7C91F9',
      },
      tertiary: {
        DEFAULT: '#373F68',
        hover: '#656EA3',
      },
      error: {
        DEFAULT: '#D73737',
        hover: '#E98888',
      },
      orange: {
        DEFAULT: '#F49F85',
      },
      cyan: {
        DEFAULT: '#62BCFA',
      },
      light: {
        100: '#F7F8FD',
        200: '#F2F4FF',
      },
      dark: {
        100: '#647196',
        200: '#3A4374',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
