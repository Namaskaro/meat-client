module.exports = {
  '/api/v1/': {
    target: 'http://localhost:4000',
    secure: false,
    changeOrigin: true,
  },
};
