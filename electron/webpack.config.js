const { withExpoWebpack } = require('@expo/electron-adapter');

module.exports = config => {
  config.resolve.extensions.push('.web.js', '.web.ts', '.web.tsx');
  return withExpoWebpack(config);
};
