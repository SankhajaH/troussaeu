/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        offWhite: '#F9F6FF',
        indigo: {
          light: '#7F8BF5',
          main: '#5465FF',
          dark: '#1D33FB',
        },
        black: {
          main: '#1C0F13',
          dark: '#000000',
        },
        grey: {
          light: '#D9D9D9',
          main: '#F4F4FA',
        },
        red: {
          main: '#BF6666',
        },
      },
    },
  },
  plugins: [],
}
