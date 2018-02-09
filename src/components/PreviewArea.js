import React from 'react'

class PreviewArea extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div
        style={{
          border: '2px solid red',
          backgroundColor: 'green',
          width: '500px',
          height: '225px',
          left: '50px',
          position: 'relative',
          zIndex: '2'
        }}
      >
        hey this is an area{' '}
      </div>
    )
  }
}

export default PreviewArea
