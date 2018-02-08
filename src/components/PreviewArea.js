import React from 'react'

class PreviewArea extends React.Component {
  render() {
    return (
      <div
        style={{
          border: '2px solid red',
          backgroundColor: 'green',
          width: '55%',
          height: '40vh',
          left: '20%',
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
