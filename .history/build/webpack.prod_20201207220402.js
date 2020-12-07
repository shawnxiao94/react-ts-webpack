/*
 * @Author: your name
 * @Date: 2020-12-07 22:03:57
 * @LastEditTime: 2020-12-07 22:04:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/webpack.prod.js
 */
const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')
const webpack = require('webpack')

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
}
module.exports = merge(baseConfig, prodConfig)
