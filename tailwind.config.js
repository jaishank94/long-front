/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  darkMode: "class",
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'gordita': ['gordita', ...defaultTheme.fontFamily.sans],
        'samsung': ['Samsung Sharp Sans', ...defaultTheme.fontFamily.sans],
        'nexa': ['Nexa', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
