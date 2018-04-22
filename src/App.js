import React, { Component } from 'react'
import Routes from './routes/index'

class App extends Component {
  render() {
    return (
      <div className="app">
        <style>{'body { background-color: black }'}</style>
        <Routes />
      </div>
    )
  }
}
export default App
