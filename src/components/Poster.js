import React from 'react'
import { Link } from 'react-router-dom'

class Poster extends React.Component {
  render() {
    let popmovie = this.props.info
    let type = this.props.select
    //console.log(this.props)
    // console.log(type)
    let poster = popmovie.poster_path
    let url = ' http://image.tmdb.org/t/p/w185/' + poster
    return (
      <div
        className="popmovie-list"
        style={{ display: 'inline-block', width: '140px' }}
      >
        <Link to={{ pathname: '/info/' + type + '/' + popmovie.id }}>
          <img
            style={{ width: '130px', height: '160px', margin: '5px' }}
            className="popmovie"
            alt={popmovie.title || popmovie.name}
            title={popmovie.title || popmovie.name}
            src={url}
          />
        </Link>
        <div style={{ width: 140, height: 40, overflow: 'hidden' }}>
          {popmovie.title || popmovie.name}
        </div>
      </div>
    )
  }
}

export default Poster
