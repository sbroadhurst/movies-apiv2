import React from 'react'
import '../../boxes.css'
import RaisedButton from 'material-ui/RaisedButton'
import Swimlane from '../../components/Swimlane'
import { Link } from 'react-router-dom'

let oldId

class PreviewArea extends React.Component {
  componentWillMount() {
    console.log('comp...')
    this.loadMedia()
    this.getSimilar()
  }

  componentDidUpdate() {
    let id = this.props.match.params.id
    if (id !== oldId) {
      console.log('will update')
      this.loadMedia()
      this.getSimilar()
      oldId = this.props.match.params.id
    }
  }
  // componentWillReceiveProps() {

  // }

  genreButtons(mov) {
    let movie = mov
    if (movie.length !== 0) {
      return (
        <div>
          {movie.genres.map((info, index) => {
            return (
              <Link
                key={index}
                to={{ pathname: '/genre/' + info.name + '/' + info.id }}
              >
                <RaisedButton
                  primary={true}
                  className="tags"
                  label={info.name}
                  info={info}
                >
                  {' '}
                </RaisedButton>
              </Link>
            )
          })}
        </div>
      )
    }
  }

  loadMedia() {
    let type = this.props.match.params.type
    let id = this.props.match.params.id
    fetch(
      ' https://api.themoviedb.org/3/' +
        type +
        '/' +
        id +
        '?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&append_to_response=videos'
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.props.setSelectedPoster(res)
      })
  }

  getSimilar() {
    let type = this.props.match.params.type
    let id = this.props.match.params.id
    fetch(
      'https://api.themoviedb.org/3/' +
        type +
        '/' +
        id +
        '/similar?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.props.setSimilar(res.results)
      })
  }

  trailer() {
    let movie = this.props.SelectedPoster

    if (movie.videos && movie.videos.results.length > 0) {
      // console.log(movie.videos.results[0].key)
      var trailerUrl =
        'https://www.youtube.com/embed/' + movie.videos.results[0].key
      return (
        <iframe
          width="420"
          height="315"
          src={trailerUrl}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        />
      )
    } else return <div> No Trailer for selection </div>
  }

  render() {
    const { Similar } = this.props
    let movie = this.props.SelectedPoster
    if (movie.release_date === undefined) {
      movie.release_date = 'N/A'
    }
    console.log(movie)
    let poster = movie.poster_path
    let posterUrl = ' http://image.tmdb.org/t/p/w185/' + poster
    //let backgroundUrl = 'http://image.tmdb.org/t/p/w780/' + background
    return (
      <div>
        {/* style={{ backgroundImage: "url(" + backgroundUrl + ")" }} */}
        <div className="wrapper">
          <header className="header">
            {movie.title}
            {movie.name}
          </header>
          <article className="main">
            <div className="body">
              <div className="overview">
                {' '}
                {movie.overview} <br />
                <br />
                <strong>Release Date: {movie.release_date}</strong> <br />
                {this.trailer()}
              </div>
            </div>
          </article>
          <aside className="aside aside-1">
            {' '}
            <img src={posterUrl} className="pic" alt="poster" />
            <footer className="footer">
              {' '}
              Genres <br />
              {this.genreButtons(movie)} <br />
            </footer>
          </aside>
        </div>
        <div style={{ paddingTop: 160 }}>
          <div>
            <div className="main-page-text">
              Similar {this.props.match.params.type}
            </div>
            <br />
          </div>
          <Swimlane posters={Similar} type={this.props.match.params.type} />
        </div>
      </div>
    )
  }
}

export default PreviewArea
