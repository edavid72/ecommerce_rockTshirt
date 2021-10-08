// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      navy: '#334257',
      ligthnavy: '#476072',
      hoverligthnavy: '#314f64',
      blue: '#548CA8',
      grey: '#EEEEEE',
      yellow: '#f3a845',
      hoveryellow: '#e99c37',
      celeste: '#3079e6',
      crimson: '#ea003f',
    },
    screens: {
      tablet: '768px',
      // => @media (min-width: 640px) { ... }

      laptop: '1366px',
      // => @media (min-width: 1024px) { ... }
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
    },
  },
  plugins: [],
};
