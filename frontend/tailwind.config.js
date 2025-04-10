/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {  fontFamily: {
      customFont: ['Plus Jakarta Sans', 'sans-serif'], // Replace 'Roboto' with your font name
    },},
  },
  plugins: [],
}