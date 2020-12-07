const path = require('path');
module.exports={
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '../dist')
  }
}

作者：大門飛燕
链接：https://juejin.cn/post/6844903873656832014
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
