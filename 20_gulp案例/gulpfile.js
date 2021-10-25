const { src, dest, series, watch } = require('gulp')
const htmlMin = require('gulp-htmlmin')
const babel = require('gulp-babel')
const terser = require('gulp-terser')
const less = require('gulp-less')
const postcss = require('gulp-postcss')
const postcssPresetEnv = require('postcss-preset-env')
const inject = require('gulp-inject')
// const browserSync = require('browser-sync')
const del = require('del')

const htmlTask = () => {
  return src('./src/index.html')
    .pipe(htmlMin({
      collapseWhitespace: true
    }))
    .pipe(dest('./dist'))
}

const jsTask = () => {
  return src('./src/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(terser({
      mangle: {
        toplevel: true
      }
    }))
    .pipe(dest('./dist'))
}

const lessTask = () => {
  return src('./src/**/*.less')
    .pipe(less())
    .pipe(postcss([postcssPresetEnv()]))
    .pipe(dest('./dist'))
}

const injectTask = () => {
  return src('./dist/index.html')
    .pipe(inject(src(['./dist/js/*.js', './dist/css/*.css']), {relative: true}))
    .pipe(dest('./dist'))
}

// 搭建本地服务器
// const bs = browserSync.create()
// const serve = () => {
//   watch('./src/**/*.js', series(jsTask, htmlTask))
//   watch('./src/**/*.less', series(lessTask, htmlTask))

//   bs.init({
//     port: 8080,
//     open: true,
//     files: './dist/*',
//     server: {
//       baseDir: './dist'
//     }
//   })
// }

const cleanTask = () => {
  return del(['dist'])
}

const task = series(cleanTask, htmlTask, jsTask, lessTask, injectTask)

module.exports = {
  htmlTask,
  jsTask,
  lessTask,
  injectTask,
  // serve,
  cleanTask,
  task
}