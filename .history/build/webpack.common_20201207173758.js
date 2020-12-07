const path = require('path')
module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist'),
  },
  rules: [
    {
      test: /\.js$/,
      use: ['babel-loader'],
      include: path.join(__dirname, '../src'),
    },
  ],
}
