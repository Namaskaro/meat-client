const proxy = require('./proxy.server');

const chainWebpack = config => {
  config.plugin('html').tap(options => {
    options[0].minify = false;
    return options;
  });
};

const configureWebpack = config => {
  return {
    devServer: { proxy },
    module: {
      rules: [
        {
          test: /\.postcss$/,
          use: ['postcss-loader'],
        },
      ],
    },
  };
};

module.exports = {
  filenameHashing: false,
  productionSourceMap: false,
  configureWebpack,
  chainWebpack,
};
