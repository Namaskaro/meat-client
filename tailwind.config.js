module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        header: '#ffffff',
        airbnb: '#ff5a5f',
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
  plugins: [],
};
