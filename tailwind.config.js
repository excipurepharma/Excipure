// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#002B44',   // The dark header/button color
          green: '#10B981',  // The "In Stock" and "WhatsApp" color
          lightGray: '#F3F4F6'
        },
      },
      borderRadius: {
        '2xl': '1rem',      // Used for those soft rounded product cards
      }
    },
  },
  plugins: [],
}
