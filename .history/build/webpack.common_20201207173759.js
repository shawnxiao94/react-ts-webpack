/*
 * @Author: your name
 * @Date: 2020-12-07 17:25:02
 * @LastEditTime: 2020-12-07 17:37:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/webpack.common.js
 */
const path = require('path')
module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  rules: [
    {
      test: /\.js$/,
      use: ['babel-loader'],
      include: path.join(__dirname, '../src'),
    },
  ],
}
