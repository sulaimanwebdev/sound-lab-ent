/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main': '#FFE38F',
        'main2': '#FDF0C8',
      },

      screens:{
        'lg2': '954px',
      }
    },
  },
  plugins: [],
}