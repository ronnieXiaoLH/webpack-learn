import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { sum, multiple } from './js/math.ts'

console.log(sum(10, 20))
console.log(multiple(10, 20))

const p = new Promise((resolve, reject) => {})

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: 'Hello React'
    }
  }

  render () {
    return (
      <div>{this.state.message}</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
