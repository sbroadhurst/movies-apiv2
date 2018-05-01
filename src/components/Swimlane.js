import React from 'react'
import Poster from './Poster'
import Carousel from 'nuka-carousel'
import '../boxes.css'
import RaisedButton from 'material-ui/RaisedButton'

class Swimlane extends React.Component {
  renderPopular() {
    const { posters } = this.props
    return (
      <Carousel
        slideWidth={'150px'}
        renderBottomCenterControls={() => {}}
        renderCenterLeftControls={({ previousSlide }) => (
          <RaisedButton className="prev" onClick={previousSlide} label="PREV" />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <RaisedButton className="next" onClick={nextSlide} label="NEXT" />
        )}
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
