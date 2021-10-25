const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { resolveApp } = require('./paths')

module.exports = {
  // watch: true,
  entry: resolveApp('./src/index.js'),
  output: {
    filename: 'bundle.js',
    path: resolveApp('./dist'),
    // publicPath 默认值是空，如果我们想在本地打包后直接通过 file 协议访问才会配置相对路径 './'，线上环境还是绝对路径 '/'
    // publicPath: './'
    // publicPath: '/abc'
  },
  resolve: {
    alias: {
      '@src': resolveApp('./src')
    },
    extensions: ['.js', '.json', '.wasm', '.vue', '.jsx', '.ts'],
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
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: resolveApp('./public/index.html')
    }),
    new VueLoaderPlugin()
  ]
}