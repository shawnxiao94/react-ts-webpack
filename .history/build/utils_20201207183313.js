/*
 * @Author: your name
 * @Date: 2020-12-07 18:33:03
 * @LastEditTime: 2020-12-07 18:33:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/utils.js
 */
/** @format */

const path = require('path')
const config = require('./config')

exports.resolve = function (dir) {
  return path.join(__dirname, dir)
}

exports.resolveAssetsRootDir = function (dir) {
  return path.join(dir)
}

exports.assetsPath = function (_path) {
  return path.posix.join(config.assetsSubDirectory, _path)
}
