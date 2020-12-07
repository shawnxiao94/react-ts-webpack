/*
 * @Author: your name
 * @Date: 2020-12-07 17:25:02
 * @LastEditTime: 2020-12-07 18:34:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/webpack.common.js
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const {
  // assetsPath,
  resolve,
} = require('./utils')

module.exports = {
  entry: {
    app: resolve('../src/index.tsx'), // 默认的key为main,打包后可以看到
  },
  output: {
    // publicPatch: '//【cdn】.com', //指定存放JS文件的CDN地址
    filename: `js/[name].[${config.isHash}].js`,
    // chunkFilename: 'js/[name].[${config.isHash}].chunk.js',
    path: resolve('../dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 正则匹配文件路径
        exclude: /node_modules/,
        use: [
          // 注意loader生效是从下往上的
          'style-loader',
          'css-loader',
        ],
      },
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
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
}
