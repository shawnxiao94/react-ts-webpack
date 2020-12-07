const merge = require('webpack-merge')
const baseConfig = require('./webpack.common')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const prodConfig = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
      minify: {
        removeComments: true, // 去掉注释
        collapseWhitespace: true, // 去掉多余空白
        removeAttributeQuotes: true, // 去掉一些属性的引号，例如id="moo" => id=moo
      },
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: assetsPath('css/[name].[contenthash].css'),
      chunkFilename: assetsPath('css/[name].[id].[contenthash].css'),
    }),
    new CleanWebpackPlugin(),
  ],
}
module.exports = merge(baseConfig, prodConfig)
