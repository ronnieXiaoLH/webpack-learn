const { getOptions } = require('loader-utils')
const { validate } = require('schema-utils')
const schema = require('../schema/my-loader.json')

// NormalLoader
// 同步loader
/* module.exports = function (content, sourcemap, meta) {
  console.log('my-loader')
  // return content
  this.callback(null, content)
} */

// 异步 Loader
/* module.exports = function (content, sourcemap, meta) {
  console.log('my-loader')
  const callback = this.async()
  setTimeout(() => {
    callback(null, content)
  }, 2000)
} */

// 解析 options 与校验 参数
module.exports = function (content) {
  console.log('my-loader')
  const options = getOptions(this)
  console.log(options)
  validate(schema, options)
  return content
}

// PitchLoader
module.exports.pitch = function () {
  console.log('loader-pitch')
}