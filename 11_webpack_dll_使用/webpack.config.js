// const CopyWebpackPlugin  = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { DllReferencePlugin } = require('webpack')
const AddAssetHtmlWepackPlugin = require('add-asset-html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash:8].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: '/node_modules/',
        use: 'babel-loader'
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false
      })
    ],
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        verdor: {
          name: 'verdor',
          test: /node_modules/,
          minSize: 0,
          priority: 1,
          minChunks: 1
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new DllReferencePlugin({
      context: path.resolve(__dirname, './'),
      manifest: path.resolve(__dirname, './dll/react.mainfest.json'),
    }),
    new AddAssetHtmlWepackPlugin({
      filepath: path.resolve(__dirname, './dll/react_dll.js')
    })
  ]
}