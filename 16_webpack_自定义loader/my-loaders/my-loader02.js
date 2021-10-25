module.exports = function (content, sourcemap, meta) {
  console.log('my-loader02')
  return content
}

module.exports.pitch = function () {
  console.log('loader-pitch02')
}