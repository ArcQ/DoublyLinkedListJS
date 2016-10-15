module.exports = {
  entry: ["./src/Calculator.js"],
  output: {
    filename: "./dist/calculator.js"
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
