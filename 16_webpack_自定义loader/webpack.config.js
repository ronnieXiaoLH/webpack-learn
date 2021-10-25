const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  context: path.resolve(__dirname, '.'),
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [
      //     {
      //       loader: 'my-loader.js',
      //       options: {
      //         name: 'ronnie',
      //         age: '18'
      //       }
      //     },
      //     'my-loader02.js',
      //     'my-loader03.js'
      //   ]
      // }
      {
        test: /\.js$/,
        use: [
          {
            loader: 'my-babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.md$/,
        use: [
          // 'html-loader',
          'my-md-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  resolveLoader: {
    modules: ['node_modules', './my-loaders']
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin()
  ]
}