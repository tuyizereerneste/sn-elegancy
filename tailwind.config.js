/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#48352d',
          light: '#A0522D',
          dark: '#653700',
        },
        secondary: {
          DEFAULT: '#4a5d4e',
          light: '#5c725f',
          dark: '#384539',
        },
      },
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};