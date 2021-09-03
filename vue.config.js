module.exports = {
  filenameHashing: false,
  chainWebpack: config => {
    config.plugin('html').tap(options => {
      options[0].minify = false;
      return options;
    });
  },
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
