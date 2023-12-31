/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.{html, js}"
  ],
  theme: {
    screens: {
      'se': '370px',
      'phone': '420px',
      'sm': '640px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    extend: {},
  },
  plugins: [],
}