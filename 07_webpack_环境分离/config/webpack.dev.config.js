const { merge } = require('webpack-merge')
const config = require('./webpack.common.config')

module.exports = merge({
  mode: 'development',
  devServer: {
    hot: true,
    // hotOnly 在热更新模块编译出错修复后，不会通过刷新浏览器去更新，而是热更新
    hotOnly: true,
    // 开发时 publicPath 和 output 中的 publicPath 保持一致
    // publicPath: '/abc',
    // host: '0.0.0.0',
    // port: '8080',
    // 启动本地服务打开默认浏览器
    open: true,
    // 是否为静态资源文件开启 gzip compression
    compress: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': ''
        },
        secure: false,
        // 后端做了来源校验(防止代理爬虫)就必须设置
        changeOrigin: true
      }
    },
    historyApiFallback: true
  },
  plugins: [
  ]
}, config)