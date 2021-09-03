const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

module.exports = (api, options) => {
  api.registerCommand('build:prerender', async args => {
    await api.service.run('build');
  });
};

module.exports.defaultModes = {
  'build:prerender': 'production',
};
