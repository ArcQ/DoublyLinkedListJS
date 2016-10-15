var baseConfig = require('./webpack.config.js');
devConfig = baseConfig;
devConfig.devtool = 'source-map';
devConfig.output.filename = "./build/calculator/js";
module.exports = devConfig;

