/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        tamil: ['Noto Sans Tamil', 'sans-serif'],
        sans: ['Inter', 'Noto Sans Tamil', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
