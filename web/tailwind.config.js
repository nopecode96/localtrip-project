// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // biru (blue-600)
        accent: '#f97316',  // orange (orange-500)
        soft: '#fdf6f0',    // soft creamy background
        rating: '#facc15',  // kuning rating (yellow-400)
        dark: '#1e293b', // dark gray (gray-800)
      },      
    },
  },
  plugins: [],
};