/**
 * /*
 *
 * @format
 * @Author: your name
 * @Date: 2020-12-07 23:02:19
 * @LastEditTime: 2020-12-07 23:02:30
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/optimization.js
 */

/** @format */

const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const config = require('./config')
const constants = require('./constants')

module.exports =
  constants.APP_ENV === 'dev'
    ? {}
    : {
        runtimeChunk: {
          name: 'manifest'
        },
        splitChunks: {
          cacheGroups: {
            default: false,
            // commons: {
            //     test: /moment|lodash|mobx/,
            //     name: 'split-vendor',
            //     chunks: 'all'
            // }
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'all'
            }
          }
        },
        minimizer: [
          new TerserPlugin({
            cache: true,
            // parallel: true,
            terserOptions: {
              compress: {
                warnings: true,
                drop_console: true,
                drop_debugger: true,
                pure_funcs: ['console.log'] // 移除console
              }
            },
            sourceMap: Boolean(config.sourceMap)
          }),
          new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
              reduceIdents: false,
              autoprefixer: false
            }
          })
        ]
      }
