import React from 'react'
import Poster from './Poster'
import Carousel from 'nuka-carousel'
// import '../boxes.css'
import RaisedButton from 'material-ui/RaisedButton'

class Swimlane extends React.Component {
  renderPopular() {
    const { posters } = this.props
    return (
      <Carousel
        slidesToShow={2}
        slideWidth={'150px'}
        renderBottomCenterControls={() => {}}
        renderCenterLeftControls={({ previousSlide }) => (
          <div className="prev">
            <RaisedButton onClick={previousSlide} label="PREV" />
          </div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div className="next">
            <RaisedButton onClick={nextSlide} label="NEXT" />
          </div>
        )}
        frameOverflow="show">
        {posters.map((info, index) => {
          return <Poster key={index} info={info} id={info.id} select={this.props.type} />
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
