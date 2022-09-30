/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#EF4983",
        "gray": "#F9f9f9",
        "info": "#8296FB",
        "graydark": "#C0BCB0",
        "warning": "#E4B52E",
        "danger": "#F886676",
      }
    },
  },
  plugins: [],
}
