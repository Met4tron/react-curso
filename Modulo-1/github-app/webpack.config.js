'use strict'
require('babel-polyfill')
const path = require('path')
const webpack = require('webpack')
const validate = require('webpack-validator')

const PATHS = {
  index: path.join(__dirname, 'src', 'index'),
  dist: path.join(__dirname, 'dist')
}

module.exports = validate({
  devtool: 'source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    PATHS.index
  ],
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'standard'
    }],
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader: 'babel'
    }]
  }
})
