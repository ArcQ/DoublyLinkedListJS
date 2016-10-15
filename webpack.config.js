module.exports = {
  entry: ["./src/dlinkedlist.js"],
  output: {
    filename: "./dist/dlinkedlist.js"
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
