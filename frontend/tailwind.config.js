/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        paytm: {
          blue: '#172B75',      // Primary blue
          lightBlue: '#00BCF1', // Light blue
          gray: '#f5f5f5',      // Light gray for backgrounds
          darkGray: '#333333',  // Dark gray for text
          borderGray: '#e0e0e0', // Border color
        }
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};