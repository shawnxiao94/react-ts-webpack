/*
 * @Author: your name
 * @Date: 2020-12-07 17:37:36
 * @LastEditTime: 2020-12-07 21:32:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/babel.config.js
 */
module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'lib',
        style: true,
      },
    ],
  ],
}
