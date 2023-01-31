/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'dark': '#0c1117',
        'dark-2': '#030609',
        'primary': '#5078ff',
        'white-blue': '#92abff'
      }
    },
  },
  plugins: [],
};
