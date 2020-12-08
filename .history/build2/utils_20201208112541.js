/**
 * /*
 *
 * @format
 * @Author: your name
 * @Date: 2020-12-08 11:25:34
 * @LastEditTime: 2020-12-08 11:25:40
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build2/utils.js
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
