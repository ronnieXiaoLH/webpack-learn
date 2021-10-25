import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
import vue from 'rollup-plugin-vue'
import replace from 'rollup-plugin-replace'
import serve from 'rollup-plugin-serve'
// import livereload from 'rollup-plugin-livereload'

export default {
  input: './src/main.js',
  output: {
    format: 'umd',
    name: 'utils',
    file: 'dist/utils.umd.js',
    globals: {
      lodash: '_'
    }
  },
  /* output: [
    {
      format: 'umd',
      name: 'utils',
      file: 'dist/utils.umd.js'
    },
    {
      format: 'cjs',
      file: 'dist/utils.cjs.js'
    },
    {
      format: 'amd',
      file: 'dist/utils.amd.js'
    },
    {
      format: 'iife',
      name: 'utils',
      file: 'dist/utils.browser.js'
    },
    {
      format: 'es',
      file: 'dist/utils.es.js'
    }
  ] */
  external: ['lodash'],
  plugins: [
    // 主要是解决引入的第三方库使用 commonjs 格式导出时能正常使用
    commonjs(),
    // 打包第三方依赖的代码，第三方依赖的代码也会打包进去
    nodeResolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    babel({
      babelHelpers: 'bundled'
    }),
    postcss(),
    vue(),
    terser(),
    serve({
      port: 8080,
      open: true,
      contentBase: '.', // 服务于哪一个文件夹
    }),
    // livereload()
  ]
}