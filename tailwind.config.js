/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      backgroundColor: '#232946',
      headline: '#fffffe',
      paragraph: '#b8c1ec',
      button: '#b8c1ec',
      buttonText: '#232946',
    },

    extend: {},
  },
  plugins: [],
}
