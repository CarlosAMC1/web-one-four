/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
         background: '#0F0F0F',
      container: '#1C1C1C',
      primary: '#FFFFFF',
      secondary: '#A3A3A3',
      accent: '#3B82F6',
      },
    },
  },
  plugins: [],
}
