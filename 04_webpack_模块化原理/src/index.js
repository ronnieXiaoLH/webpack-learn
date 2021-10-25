const { sum, multiple } = require('./js/math.js')
import { dateFormat, priceFormat } from './js/format'

console.log(sum(20, 30))
console.log(multiple(20, 30))

console.log(dateFormat())
console.log(priceFormat())