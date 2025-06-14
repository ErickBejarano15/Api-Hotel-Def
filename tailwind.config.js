/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // ¡Importante! Para que Tailwind procese también el index.html
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        body: ["REM", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
