import React from 'react'
import Poster from './Poster'
import Carousel from 'nuka-carousel'

class Swimlane extends React.Component {
  renderPopular() {
    const { posters } = this.props
    return (
      <Carousel
        slideWidth={'150px'}
        renderBottomCenterControls={() => {}}
        frameOverflow="show"
      >
        {posters.map((info, index) => {
          return (
            <Poster
              key={index}
              info={info}
              id={info.id}
              select={this.props.type}
            />
          )
        })}
      </Carousel>
    )
  }

  render() {
    const { map } = this.props
    return (
      <div>
        <div>{this.renderPopular(map)} </div>
      </div>
    )
  }
}

export default Swimlane
