const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),

  entry: {
    index: './@dom.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['env', 'latest'],
          plugins: ['transform-runtime', 'transform-decorators-legacy']
        }
      }
    }]
  }
}
