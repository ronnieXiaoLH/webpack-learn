const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const config = require('./webpack.config')

const app = express()

const complier = webpack(config)
const middleware = webpackDevMiddleware(complier)

app.use(middleware)

app.listen(3000, () => {
  console.log('server running at 3000')
})