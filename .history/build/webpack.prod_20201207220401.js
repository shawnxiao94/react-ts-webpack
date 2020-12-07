const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')
const webpack = require('webpack')

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
}
module.exports = merge(baseConfig, prodConfig)
