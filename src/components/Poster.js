import React from 'react'

class Poster extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.select(this.props.info)
    //  console.log(this.props.info)
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

export default Poster
