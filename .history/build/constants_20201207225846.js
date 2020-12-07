/**
 * /*
 *
 * @format
 * @Author: your name
 * @Date: 2020-12-07 22:58:03
 * @LastEditTime: 2020-12-07 22:58:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/constants.js
 */

/** @format */

const argv = require('yargs-parser')(process.argv.slice(4))
const APP_ENV = argv.env || 'dev'

const FILE_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx']

module.exports = {
  APP_ENV,
  FILE_EXTENSIONS
}
