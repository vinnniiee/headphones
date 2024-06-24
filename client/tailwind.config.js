const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      scrollbar: {
        width: '8px',
        height: '8px',
        thumb: {
          backgroundColor: '#888', // Scrollbar thumb color
          borderRadius: '4px', // Scrollbar thumb radius
        },
        track: {
          backgroundColor: '#f1f1f1', // Scrollbar track color
        },
      },
      boxShadow: {
        'b': '0px 6px 6px -5px rgba(0, 0, 0, 0.1)',
        'dark': '5px 5px 20px 10px rgba(88, 0, 164, 0.6), 5px 2px 20px 10px rgba(185, 7, 179, 0.1)',
        
      },
      fontSize:{
        '2xs':'0.6rem',
        '3xs':'0.5em'
      }
    },
    fontFamily:{
      'sans': ['"Audiowide"', ...defaultTheme.fontFamily.sans],
    }
  },
  variants: {
    scrollbar: ['rounded'],
  },
  plugins: [
    // Custom plugin for scrollbar
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#f1f1f1',
          },
        },
        '.scrollbar-none': {
          overflow: 'auto',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}