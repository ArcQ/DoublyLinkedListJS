var config =  {
  entry: ['./src/dlinkedlist.js'],
  output: {
    filename: 'dlinkedlist.js',
    libraryTarget: 'commonjs2',
    library: 'dlinkedlist',
    path: './build',
  },
  module: {
    loaders: [
      {
        test: /\.es6/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'] 
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
};

if(process.env.NODE_ENV==='dev'){
  onfig.devtool = 'inline-source-map';
  config.output.path= './build';
}
else if(process.env.NODE_ENV==='dist'){
  config.output.path = './dist';
}

module.exports = config;
