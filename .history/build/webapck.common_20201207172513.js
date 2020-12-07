/*
 * @Author: your name
 * @Date: 2020-12-07 17:25:02
 * @LastEditTime: 2020-12-07 17:25:09
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/webapck.common.js
 */
const path = require('path')
module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
  },
}
