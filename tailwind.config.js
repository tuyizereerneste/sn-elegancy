/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d', // Dark blue
          light: '#2a4a7f',
          dark: '#0f2744',
        },
        secondary: {
          DEFAULT: '#4a5d4e', // Military green
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