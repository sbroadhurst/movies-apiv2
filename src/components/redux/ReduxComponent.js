import React from 'react'

export default class ReduxComponent extends React.Component {
  componentWillMount() {
    // let counter = 0
    // setInterval(() => {
    //   this.props.init('new piece of text ' + counter++)
    // }, 1000)
  }

  render() {
    const { message } = this.props
    console.log(message)
    return <div>Hello from redux {message}</div>
  }
}
