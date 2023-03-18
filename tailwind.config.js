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
        'sm3': '396px',
        'sm2': '354px',
        'md2': '790px',
        'lg4': '844px',
        'lg3': '876px',
        'lg2': '954px',
      }
    },
  },
  plugins: [],
}