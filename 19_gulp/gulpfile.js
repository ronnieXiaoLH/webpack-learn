const { src, dest, watch } = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const terser = require('gulp-terser')

const jsTask = cb => {
  return src('./src/main.js')
    .pipe(babel({ presets: ['@babel/preset-env']}))
    // gulp-uglify 已经很久没用更新了
    // .pipe(uglify())
    .pipe(terser({ mangle: { toplevel: true }}))
    .pipe(dest('./dist'))
}

watch('./src/*.js', jsTask)

module.exports = {
  jsTask
}