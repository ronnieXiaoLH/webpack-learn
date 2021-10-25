import { sum } from './utils/math.js'
import _ from 'lodash-es'

// 对样式文件的处理，与 webpack 不同，不需 loader，只需安装相应的依赖即可
// vite 会把对应的样式文件装换成 js文件，在请求样式资源的时候，vite 基于 connet 搭建的开发服务器会进行转发
import './css/style.css'
import './css/test.less'

// 对图片的处理，与 webpack 不同，不需 loader，vite 会自动处理
import imgContent from './img/1.jpg'
const img = document.createElement('img')
img.src = imgContent
document.body.appendChild(img)

// 对 Vue 的支持
import Vue from 'vue'
import App from './vue/App.vue'
new Vue({
  render: (h) => h(App)
}).$mount('#app')

// 对 React 的支持
import React from 'react'
import ReactDOM from 'react-dom'
import ReactApp from './react/App.jsx'
ReactDOM.render(<ReactApp />, document.getElementById('root'))


console.log('Hello Vite')
console.log(sum(10, 20))
console.log(_.join(['N', 'B', 'A'], ''))