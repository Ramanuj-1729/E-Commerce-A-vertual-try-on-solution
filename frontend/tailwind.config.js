/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      animation: {
        
      },
      keyframes: {
        
      }
    },
    colors: {
      black: "#000000",
      white: "#ffffff",
      gray: "#b6b6b6",
      fadeFont: "#484848",
      red: "#d9121f",
    },
    screens: {
      'smallPhone': '320px', // Phone - portrait
      'largePhone': '480px', // Phone - landscape + portrait
      'smallTablet': '600px', // Small tablet - portrait
      'mediumTablet': '768px', // Large tablet - portrait
      'largeTablet': '1024px', // Large tablet - landscape
      'desktop': '1280px', // Desktop
      'wideScreen': '1440px', // Wide Screen Desktop
    },
  },
  plugins: []
}
