module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'Dark-color': '#0f0f0f',
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },

  },
  plugins: [],
};
