import React from 'react'

export default class TestComponent extends React.Component {
  render() {
    const { message } = this.props
    console.log(message)
    return <div>Hello from test {message}</div>
  }
}
