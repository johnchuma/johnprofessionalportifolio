/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#53FF8A",
        muted:"#9EA4A0",
      }
    },
  },
  plugins: [],
}