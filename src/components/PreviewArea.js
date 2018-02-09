import React from 'react'
import './Preview.css'

class PreviewArea extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showPreview: true
    }
    this.toggleClass = this.toggleClass.bind(this)
  }
  toggleClass() {
    let currentState = this.state.showPreview
    this.setState({ PreviewArea: !currentState })
  }

  render() {
    // console.log(this.props)
    let movie = this.props.movieData
    let poster = movie.poster_path
    let background = movie.backdrop_path
    let posterUrl = ' http://image.tmdb.org/t/p/w185/' + poster
    let backgroundUrl = 'http://image.tmdb.org/t/p/w500/' + background

    return (
      <div
        style={{
          width: '500px',
          height: '225px',
          left: '50px',
          top: '10px',
          position: 'relative'
        }}
      >
        <div>
          <img src={backgroundUrl} className="background" />
          <img src={posterUrl} className="pic" />
          <h1 className="title"> {movie.title} </h1>
          <p className="overview" alt={movie.overview} title={movie.overview}>
            {' '}
            {movie.overview}{' '}
          </p>
          <p className="release">
            {' '}
            <strong>Release Date: {movie.release_date}</strong>{' '}
          </p>
        </div>
      </div>
    )
  }
}

export default PreviewArea
