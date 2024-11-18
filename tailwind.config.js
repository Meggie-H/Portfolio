/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'background-dark': '#0E0E0E',
      'background-medium': '#E1E1E1',
      'danger': '#e3342f',
      'background-light': '#EAEAEA',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

