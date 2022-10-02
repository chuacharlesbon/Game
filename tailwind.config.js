/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        phone: '0px',
        mobile: '375px',
        surfaceDuo: '540px',
        medium: '768px',
        tablet: '800px',
        tabletWide: '1000px',
        laptop: '1500px',
        desktop: '1880px',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          100: '#073763',
          200: '#073763B3',
          300: '#07376366',
          400: '#073661',
          500: '#083E70',
          600: '#00407C',
          700: '#05294A',
        },
        secondary: {
          100: '#202123',
          200: '#202123B3',
          300: '#20212366',
        },
        blue: {
          100: '#3173AF',
          200: '#6F9AC5',
          300: '#A9C2DA',
          400: '#0C61B0',
        },
        white: '#FCFCFC',
        grey: {
          100: '#818181',
          200: '#818181B3',
          300: '#81818166',
          400: '#81818140',
          500: '#F5F6F7',
          600: '#F2F5FF',
          700: '#7D888B',
          800: '#EFF3F4',
          900: '#F7FAFB',
          1000: '#798689',
          1100: '#DADADA',
          1200: '#C9D5D9',
        },
        red: {
          100: '#F37777',
          200: '#F37777B3',
          300: '#F3777766',
          400: '#E94128',
        },
        green: {
          100: '#63C9A8',
          200: '#92D6BF',
          300: '#BDE4D7',
          400: '#42B963',
        },
        yellow: {
          100: '#FBDD8C',
          200: '#FAE4AD',
          300: '#F7ECCD',
        },
        orange: {
          100: '#FF733F',
          200: '#FF7643',
          300: '#F7D8AC',
          400: '#FF6C3E',
        },
        dark: {
          100: '#333333',
        },
        light: {
          100: '#F8FBFF',
          200: '#E8F3FD',
        },
      },
    }
  },
  plugins: [],
}
