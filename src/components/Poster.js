import React from 'react'
import PreviewArea from './PreviewArea'

class PopMovie extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const { id, backdrop_path, title, overview, poster_path } = this.props.info
    console.log(id, title, overview, poster_path, backdrop_path)
    return (
      <PreviewArea
        id={id}
        backdrop={backdrop_path}
        title={title}
        overview={overview}
        poster={poster_path}
      />
    )
  }
  render() {
    let popmovie = this.props.info

    let poster = popmovie.poster_path
    // let id = popmovie.id
    let url = ' http://image.tmdb.org/t/p/w185/' + poster
    return (
      <div className="popmovie-list" style={{ display: 'inline' }}>
        <img
          style={{ width: '70px', height: '100px', margin: '1px' }}
          className="popmovie"
          alt={popmovie.title}
          title={popmovie.title}
          src={url}
          onClick={this.handleClick}
        />
      </div>
    )
  }
}

export default PopMovie
