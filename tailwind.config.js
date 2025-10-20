/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          600: '#EC008C',
          700: '#c00074'
        }
      }
    }
  },
  plugins: [],
}
