import React, { Component } from 'react'
import { message } from 'statuses'

export default class ReactApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'hello react!!'
    }
  }

  render () {
    return (
      <div>{this.state.message}</div>
    )
  }
}