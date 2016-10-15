var baseConfig = require('./webpack.config.js');
devConfig = baseConfig;
devConfig.devtool = 'source-map';
devConfig.output.filename = "./build/dlinkedlist.js";
module.exports = devConfig;

