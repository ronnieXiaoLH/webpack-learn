import { sum, multiple } from './js/math.js'

console.log(sum(1, 2))
console.log(multiple(1, 2))

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})