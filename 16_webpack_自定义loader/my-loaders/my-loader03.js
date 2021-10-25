module.exports = function (content, sourcemap, meta) {
  console.log('my-loader03')
  return content
}

module.exports.pitch = function () {
  console.log('loader-pitch03')
}