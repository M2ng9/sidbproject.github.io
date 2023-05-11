/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0f766e',
        secondary: '#334155',
        third: '#f1f5f9',
        dark: '#1c1917',
        grays: '#cbd5e1',
      },
      screens: {
        '2xl': '1320px', 
      },
    },
  },
  plugins: [],
}

