module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '320px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1920px',
    },

    extend: {
      colors: {
        header: '#ffffff',
        airbnb: '#ff5a5f',
        admin: '#5D70A4',
        facebook: '#1877F2',
        google: '#413F61',
        lynch: '#71809d',
        zumthor: '#E3ECFF',
        trout: '#494e61',
        mineshaft: '#212121',
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '800px',
          },
          '@screen lg': {
            maxWidth: '1000px',
          },
          '@screen xl': {
            maxWidth: '1100px',
          },
          '@screen xxl': {
            maxWidth: '1280px',
          },
          '@screen xxxl': {
            maxWidth: '1600px',
          },
        },
      });
    },
    //  end
  ],
};
