
// v4.0 后
const foo = (cb) => {
  console.log('foo')
  cb()
}

// v4.0 前
const gulp = require('gulp')
gulp.task('bar', cb => {
  console.log('bar')
  cb()
})

module.exports = {
  foo
}

// 默认任务
module.exports.default = cb => {
  console.log('default')
  cb()
}