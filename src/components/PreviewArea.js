import React from 'react'

class PreviewArea extends React.Component {
  render() {
    const { tab1 } = this.props

    console.log(tab1)
    return (
      <div
        style={{
          border: '2px solid red',
          backgroundColor: 'green',
          width: '55%',
          height: '40vh',
          left: '20%',
          position: 'relative'
        }}
      />
    )
  }
}

export default PreviewArea
