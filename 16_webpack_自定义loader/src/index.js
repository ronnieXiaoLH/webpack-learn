import 'highlight.js/styles/default.css'
import code from './test.md'
document.body.innerHTML = code

const message = 'hello loader'
console.log(message)

const sum = (a, b) => a + b

sum(10, 20)
