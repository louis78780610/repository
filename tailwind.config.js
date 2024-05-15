/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': {'min': '320px', 'max': '480px'},
      // => @media (min-width: 320px) { ... }

      'md': {'min': '481px', 'max': '767px'},
      // => @media (min-width: 768px) { ... }

      'lg': {'min': '768px', 'max': '960px'},
      // => @media (min-width: 1024px) { ... }

      'xl': {'min': '961px', 'max': '1280px'},
      // => @media (min-width: 1280px) { ... }

      '2xl': '1281px',
      // => @media (min-width: 1536px) { ... }    
    }
  },
  plugins: [],
}
