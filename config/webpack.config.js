
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, '..', 'src', 'pulse-engine.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'pulse-engine.js',
    library: 'Pulse',
    libraryTarget: 'umd',
    globalObject: "typeof self !== 'undefined' ? self : this"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      }
    ]
  },
  resolve: { extensions: ['.js'] }
};
