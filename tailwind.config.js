/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "kaushan": ["Kaushan Script", "Arial"],
        "roboto": ["Roboto Condensed", "sans-serif", "Arial"],
      },
      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}

