import React from 'react'
import { Link } from 'next/link'

class Poster extends React.Component {
  render() {
    let popmovie = this.props.info
    let type = this.props.select
    //console.log(this.props)
    // console.log(type)
    let poster = popmovie.poster_path
    let url = ' http://image.tmdb.org/t/p/w185/' + poster
    return (
      <div className="popmovie-list" style={{ display: 'inline-block', width: '140px' }}>
        <Link href={{ pathname: '/info/' + type + '/' + popmovie.id }}>
          <img
            style={{ width: '120.25px', height: '180.7px', margin: '5px' }}
            className="popmovie"
            alt={popmovie.title || popmovie.name}
            title={popmovie.title || popmovie.name}
            src={url}
          />
        </Link>
        <div
          className="title-text"
          style={{
            width: 120,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}>
          {popmovie.title || popmovie.name}
        </div>
      </div>
    )
  }
}

export default Poster
