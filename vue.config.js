module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.postcss$/,
          use: ['postcss-loader'],
        },
      ],
    },
  },
};
