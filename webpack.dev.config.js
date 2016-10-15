var baseConfig = require('./webpack.config.js');
devConfig = baseConfig;
devConfig.devtool = 'source-map';
module.exports = devConfig;

