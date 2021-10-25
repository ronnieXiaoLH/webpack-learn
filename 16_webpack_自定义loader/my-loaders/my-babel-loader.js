const babel = require('@babel/core')
const { getOptions } = require('loader-utils')

module.exports = function (content) {
  const callback = this.async()
  const options = getOptions(this)

  // 对源代码进行装换
  babel.transform(content, options, (err, res) => {
    if (err) {
      console.error(err)
    } else {
      callback(null, res.code)
    }
  })
}