/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'navbar-transparent': 'transparent',
        'navbar-black': '#000',
      },
    },
  },
  plugins: [],
}