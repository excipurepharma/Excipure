/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",    // This scans your pages
    "./src/components/**/*.{js,ts,jsx,tsx}", // This scans your cards/navbar
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#002B44',
          green: '#10B981',
        }
      }
    },
  },
  plugins: [],
}
