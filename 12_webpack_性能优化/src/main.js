import _ from 'lodash'
import {add} from './math'

console.log('main')
console.log(_.join(['hello', 'main']))
console.log(add(10, 20))

const btn = document.createElement('button')
btn.innerHTML = '新增元素'
btn.addEventListener('click', () => {
  // /* webpackPrefetch:true */ 预获取
  // /* webpackPreload:true */ 预加载
  import(/* webpackPrefetch:true */ 
    /* webpackChunkName: "element" */
    /* webpackPrefetch:true */
    './element').then(({default: element}) => {
      document.body.appendChild(element)
    })
})
document.body.appendChild(btn)
