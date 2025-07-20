/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       background: '#0f0f0f',
      container: '#1c1c1c',
      primary: '#ffffff',
      secondary: '#a3a3a3',
      accent: '#3b82f6',
      },
    },
  },
  plugins: [],
}
