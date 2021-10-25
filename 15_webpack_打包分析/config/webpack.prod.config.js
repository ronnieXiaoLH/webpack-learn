const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin')
const { merge } = require('webpack-merge')
const config = require('./webpack.common.config')

// 测量具体各个 plugin 和 loader 的打包时间
// const smp = new SpeedMeasureWebpackPlugin()

const mergeConfig = merge({
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
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css'
    }),
    new CompressionWebpackPlugin({
      threshold: 0,
      test: /\.(js|css)$/
    })
  ]
}, config)

// module.exports = smp.wrap(mergeConfig)
module.exports = mergeConfig