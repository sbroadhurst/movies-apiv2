import React from 'react'
import PopMovie from './PopMovie'

class UpComingMap extends React.Component {
  renderPopular() {
    return (
      <div
        style={{
          width: '80%',
          height: '20vw',
          overflow: 'auto',
          display: 'inline',
          margin: '2%'
        }}
      >
        {this.props.upcoming.map((info, index) => {
          return (
            <PopMovie
              key={index}
              info={info}
              id={info.id}

              // select={this.props.select}
            />
          )
        })}
      </div>
    )
  }

  render() {
    const { upcoming } = this.props
    // console.log('uuuu', upcoming)
    return <div>{this.renderPopular(upcoming)}</div>
  }
}
export default UpComingMap
