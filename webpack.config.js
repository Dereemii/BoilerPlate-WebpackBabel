const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};