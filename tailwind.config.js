/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': "#25434d",
        "secondary": "#a7e8e0",
        "bggray": "#E9E9E9",
        "dark-teal": "#25434d",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "aqua": "#e9f3f5",
        "light-gray": "#7D7987",
        "white-smoke": "#F1F1F1",
        "lime": "#8ABE53",
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}