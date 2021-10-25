const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')

const { resolveApp } = require('./paths')

module.exports = {
  // watch: true,
  entry: {
    index: './src/index.js',
    main: './src/main.js'
  },
  output: {
    path: resolveApp('./dist'),
    filename: '[name].[contenthash:8].bundle.js',
    // 设置异步导入的文件打包后的文件名，name 对应魔法注释的设置的名字
    chunkFilename: '[name].[contenthash:8].hundle.js'
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
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveApp('./public/index.html')
    }),
    new VueLoaderPlugin()
  ],
  // 优化
  optimization: {
    // 代码压缩
    minimizer: [
      new TerserPlugin({
        // parallel: true, // 多进程打包，项目大建议开启，项目小，开启多进程本身也是有开销的
        extractComments: false
      }),
      // css 代码丑化压缩
      new CssMinimizerWebpackPlugin()
    ],
    // 分隔代码块
    splitChunks: {
      /**
       * chunks 的取值：
       *    + initial: 只对入口chunk，对于异步代码不chunk
       *    + async: 异步chunk，对于异步代码chunk
       *    + all: 全部chunk
       */
      chunks: 'all',
      // 最小尺寸：拆出来的包的大小必须大于等于 minSize，单位是 byte
      // minSize: 20000,
      // 最少被引用了几次 
      // minChunks: 1,
      cacheGroups: {
        // priority 当同时满足多个分组时，priority 越大优先级越高
        // 第三方模块
        vendor: {
          name: 'vendor',
          test: /[/\\]node_modules[/\\]/,
          priority: 1, // 优先级，很重要！！！
          minSize: 0,
          minChunks: 1
        },
        // 公共模块
        common: {
          name: 'common',
          priority: 0,
          minSize: 0,
          minChunks: 2
        }
      }
    }
  }
}