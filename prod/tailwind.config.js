/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        20: 'repeat(20, minmax(0, 1fr))',
        18: 'repeat(18, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      }
    },
  },
  plugins: [],
}

