import _ from 'lodash'
import { sum } from './utils/math'
// const { sum } = require('./utils/math')
import './css/style.css'
import Vue from 'vue'
import App from './vue/App.vue'

const message = 'Hello Rollup'
console.log(message)

console.log(sum(10, 20))

console.log(_.join(['N', 'B', 'A'], ''))

new Vue({
  render: (h) => {
    return h(App)
  }
}).$mount('#root')