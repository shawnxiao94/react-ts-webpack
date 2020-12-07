/*
 * @Author: your name
 * @Date: 2020-12-07 17:25:02
 * @LastEditTime: 2020-12-07 21:38:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-webpack/build/webpack.common.js
 */
const config = require('./config')
const {
  // assetsPath,
  resolve,
} = require('./utils')

const HtmlWebpackPlugin = require('html-webpack-plugin')

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
          //
          APP_ENV !== 'dev' ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader', // 解析 @import 和 url() 为 import/require() 方式处理
            options: {
              importLoaders: 1, // 0 => 无 loader(默认); 1 => postcss-loader; 2 => postcss-loader, sass-loader
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, '../src'),
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            // include: resolve('../src'),
            options: {
              // 这个在最新的scss版本中已经不能用了2020-01-05更新，额其实一两个月前就不能这样写了
              // includePaths: [path.join(__dirname, '../src/styles')]
              // 应换成下面的
              sassOptions: {
                includePaths: [path.join(__dirname, '../src/styles')],
              },
            },
          },
        ],
      },
      {
        // for ant design
        test: /\.less$/,
        include: resolve('../node_modules'),
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                modifyVars: theme,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //1024 == 1kb
              //小于10kb时打包成base64编码的图片否则单独打包成图片
              limit: 10240,
              name: path.join('img/[name].[hash:7].[ext]'),
            },
          },
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240,
              name: path.join('font/[name].[hash:7].[ext]'),
            },
          },
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
    alias: {
      '@': resolve('../src'),
      '@ant-design/icons/lib/dist$': resolve('../src/icons.ts'),
      '@components': resolve('../src/components'),
      '@img': resolve('../src/assets/img'),
    },
  },
}
