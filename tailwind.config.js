/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      }
    },
    colors:{
      blue: {
        500: '#0076ce',
        100: '#ddeef5',
      },
      purple: {
        100: '#fef2ff',
        500: '#9400D3',
      },
      red: {
        100: '#f9eef3',
      },
      green:'#096A2E',
      white: '#FFFFFF',
    }
  },
  plugins: [],
}

