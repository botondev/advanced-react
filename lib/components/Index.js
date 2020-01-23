import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component {
  state = {
    answer: 42
  }

  asyncFunc = () => {
    return Promise.resolve(37)
  }

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    })
  }

  render() {
    return (
      <h2>Hello Class Component -- {this.state.answer}</h2>
    )
  }
}

render(
  <App/>,
  document.getElementById('root')
)