import { add } from './math'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import ReactApp from './reactApp.jsx'
import Vue from 'vue'
import VueApp from './vueApp'
// import router from './router'
import router from '@src/router'

console.log('webpack-dev-server')
add(1, 2)

if (module.hot) {
  module.hot.accept('./math.js')
}

// ReactApp
// ReactDOM.render(<ReactApp />, document.getElementById('app'))

// VueApp
const vm = new Vue({
  router,
  render: h => h(VueApp)
}).$mount('#root')
console.log(vm)