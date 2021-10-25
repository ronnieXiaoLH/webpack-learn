const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ReactRefreshWebpackPlugin = require('react-refresh-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  // watch: true,
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath 默认值是空，如果我们想在本地打包后直接通过 file 协议访问才会配置相对路径 './'，线上环境还是绝对路径 '/'
    // publicPath: './'
    // publicPath: '/abc'
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.wasm', '.vue', '.jsx', '.ts'],
  },
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
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // new ReactRefreshWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}