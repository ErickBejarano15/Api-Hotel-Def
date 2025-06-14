/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",           // ¡Importante! Para que Tailwind procese también el index.html
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
