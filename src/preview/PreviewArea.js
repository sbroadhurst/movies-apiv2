import React from 'react'
import '../Boxes.css'
import RaisedButton from 'material-ui/RaisedButton'
import Swimlane from '../components/Swimlane';
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
    console.log(movie)
    if (movie.length !== 0) {
      return (
        <div>
          {movie.genres.map((info, index) => {
            return (
              <Link key={index} to={{ pathname: '/genre/' + info.name + '/' + info.id }}><RaisedButton primary={true} className='tags' label={info.name}
                info={info}
              > </RaisedButton></Link>
            )
          })}
        </div>
      )
    }
  }

  loadMedia() {
    console.log('zzzzz')
    let type = this.props.match.params.type
    let id = this.props.match.params.id
    fetch(
      ' https://api.themoviedb.org/3/' + type + '/' + id + '?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US'
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        // console.log(res)
        //          this.setState({ popularTv: res.results })
        this.props.setSelectedPoster(res)
      })
  }

  getSimilar() {
    let type = this.props.match.params.type
    let id = this.props.match.params.id
    fetch(
      'https://api.themoviedb.org/3/' + type + '/' + id + '/similar?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        // console.log(res)
        //          this.setState({ popularTv: res.results })
        this.props.setSimilar(res.results)
      })
  }

  render() {
    // console.log(this.props)
    const { Similar } = this.props
    //console.log(Similar)
    let movie = this.props.SelectedPoster
    if (movie.release_date === undefined) { movie.release_date = 'N/A' }
    console.log(movie)
    let poster = movie.poster_path
    let background = movie.backdrop_path
    let posterUrl = ' http://image.tmdb.org/t/p/w185/' + poster
    let backgroundUrl = 'http://image.tmdb.org/t/p/w780/' + background
    // console.log(posterUrl, backgroundUrl)
    return (
      <div>
        {/* style={{ backgroundImage: "url(" + backgroundUrl + ")" }} */}
        <div className="wrapper">
          <header className="header">{movie.title}{movie.name}</header>
          <article className="main">
            <div className='body'>
              <p className="overview" >  {movie.overview} <br /><br />
                <strong>Release Date: {movie.release_date}</strong>{' '} </p>
            </div>
          </article>
          <aside className="aside aside-1"> <img src={posterUrl} className="pic" alt='poster' />
            <footer className="footer"> Genres <br />{this.genreButtons(movie)} <br />
              <div>
                <div className='main-page-text'>Similar {this.props.match.params.type}</div><br />
                <Swimlane posters={Similar} type={this.props.match.params.type} />
              </div>
            </footer>
          </aside>
        </div>
      </div>
    )
  }
}

export default PreviewArea
