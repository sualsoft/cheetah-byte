/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{html,js}",
    "./content/**/*.{html,js,md}",
    "./themes/**/*.{html,js}",
    "./static/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      "tiger-light": "#BE8E46",
      "tiger-dark": "#261E11",
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
