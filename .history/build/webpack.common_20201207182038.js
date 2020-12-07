/*
 * @Author: your name
 * @Date: 2020-12-07 17:25:02
 * @LastEditTime: 2020-12-07 18:20:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/webpack.common.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
module.exports = {
  entry: path.join(__dirname, '../src/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        include: [resolve('../src')],
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        // 排除node_modules底下的
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html',
      inject: true,
    }),
  ],
  devServer: {
    host: 'localhost',
    port: 3000,
    historyApiFallback: true,
    overlay: {
      //当出现编译器错误或警告时，就在网页上显示一层黑色的背景层和错误信息
      errors: true,
    },
    inline: true,
    hot: true,
  },
}
