const path = require('path')

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'build'),
    /**
     * umd: 支持 AMD/CommonJS(2)/浏览器
     * CommonJS: 社区规范的CommonJS，这个里面是没有 module 对象的
     * CommonJS2: Node实现的CommonJS，这个里面是有 module 对象，module.exports
     */
    libraryTarget: 'umd',
    library: 'xlhUtils', // 暴露的全局对象名称
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.js']
  }
}