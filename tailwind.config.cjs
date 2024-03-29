/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}","./index.html"],
  theme: {
      extend: {
        fontFamily: {
          sans: ['Roboto', 'system-ui', 'sans-serif'],
        },
    },
    colors: {
      'navi-blue':'#333d51',
      'transparent':'#00000000',
      'search-bg-color':'#575d6d',
      'search-text':'#D3D3D3',

      dark: {
        'background':'#333d51',
        'search-bg-color':'#575d6d',
        'search-text':'#D3D3D3',
      },
      light:{
        'background':'#FAF9F6',
        'search-bg-color':'#ebecf0',
        'search-text':'#24272e',
      }
    },

    screens: {
      'sm': {'min': '0px', 'max': '576px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
 
};



