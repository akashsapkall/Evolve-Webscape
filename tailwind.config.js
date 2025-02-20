/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        club: {
          navy: '#0a192f',
          mint: '#e6f1ff',
          teal: '#64ffda',
          slate: '#8892b0',
          charcoal: '#172a45',
          pink: '#FF69B4',
          lavender: '#E6E6FA'
        }
      }
    }
  },
  plugins: [],
};

