const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const config = require('./webpack.common.config')

module.exports = merge({
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  // 配置第三方依赖的 CDN 时需定义全局对象
  externals: {
    // 怎么知道第三方依赖包暴露的全局对象是什么？去官网看
    lodash: '_'
  },
  plugins: [
    new CleanWebpackPlugin(),
    // style-loader 会使 JS 中的 css 代码以 style 标签的形式插入 html 中，mini-css-extract-plugin 可以把 css 抽出单独文件中
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    })
  ]
}, config)