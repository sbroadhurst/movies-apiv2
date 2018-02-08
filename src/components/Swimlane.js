import React from 'react'
import Poster from './Poster'

class Swimlane extends React.Component {
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
        {this.props.posters.map((info, index) => {
          while (index < 8) {
            return (
              <Poster
                key={index}
                info={info}
                id={info.id}
                select={this.props.select}
              />
            )
          }
        })}
      </div>
    )
  }

  render() {
    const { map } = this.props
    //  console.log('zzzz', popular)
    return <div>{this.renderPopular(map)}</div>
  }
}
export default Swimlane
