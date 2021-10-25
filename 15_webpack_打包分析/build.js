const webpack = require('webpack')
const config = require('./config/webpack.prod.config.js')

console.log(typeof webpack)
console.log(config)
// const compiler = webpack(config)
// console.log(compiler)
// compiler.run((err, status) => {
//   if (err) {
//     console.error(err)
//   } else {
//     console.log(status)
//   }
// })