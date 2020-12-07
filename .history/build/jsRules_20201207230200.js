/**
 * /*
 *
 * @format
 * @Author: your name
 * @Date: 2020-12-07 23:01:53
 * @LastEditTime: 2020-12-07 23:01:59
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/jsRules.js
 */

/** @format */

const { resolve } = require('./utils')

module.exports = [
  {
    test: /\.(j|t)sx?$/,
    include: [resolve('../src')],
    use: [
      {
        loader: 'babel-loader'
      }
    ],
    exclude: /node_modules/
  }
]
