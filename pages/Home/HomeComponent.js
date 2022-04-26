import React from 'react'
import Swimlane from '../../components/Swimlane'
// import '../../boxes.css'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

class HomeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      value: '',
    }
  }

  loadMedia(mediaType) {
    if (mediaType === 'tv') {
      fetch('https://api.themoviedb.org/3/tv/popular?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1')
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          this.props.setPopularTV(res.results)
        })
      fetch(' https://api.themoviedb.org/3/tv/top_rated?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1')
        .then((res) => {
          return res.json()
        })
        .then((top) => {
          this.props.setTopRatedTV(top.results)
        })
      fetch(
        ' https://api.themoviedb.org/3/tv/on_the_air?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then((res) => {
          return res.json()
        })
        .then((air) => {
          this.props.setTVOnAir(air.results)
        })

      //end of tv
    } else {
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1')
        .then((res) => {
          return res.json()
        })
        .then((res) => {
          this.props.setPopularMovies(res.results)
        })

      fetch(
        ' https://api.themoviedb.org/3/movie/top_rated?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then((res) => {
          return res.json()
        })
        .then((top) => {
          this.props.setTopRatedMovies(top.results)
        })
      fetch(
        'https://api.themoviedb.org/3/movie/upcoming?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then((res) => {
          return res.json()
        })
        .then((upcoming) => {
          this.props.setUpcomingMovies(upcoming.results)
        })
      fetch(
        'https://api.themoviedb.org/3/movie/now_playing?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&page=1'
      )
        .then((res) => {
          return res.json()
        })
        .then((playing) => {
          this.props.setNowPlayingMovies(playing.results)
        })
      //end of movies
    }
  }

  handleChange = (event, index, value) => {
    this.loadMedia(value)
    this.setState({ value })
  }

  componentWillMount() {
    this.setState({ value: 'movie' })
    this.loadMedia()
  }

  render() {
    const { PopularMovies, UpcomingMovies, TopRatedMovies, TopRatedTV, NowPlayingMovies, PopularTV, TVOnAir } =
      this.props

    if (this.state.value === 'movie')
      return (
        <div>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value="movie" primaryText="movie" />
            <MenuItem value="tv" primaryText="tv" />
          </DropDownMenu>
          <p className="main-page-text">Now Playing</p>
          <div>
            <Swimlane type="movie" posters={NowPlayingMovies} />
          </div>
          <p className="main-page-text">Popular</p>
          <div>
            <Swimlane type="movie" posters={PopularMovies} />{' '}
          </div>
          <p className="main-page-text">Top Rated</p>
          <div>
            <Swimlane type="movie" posters={TopRatedMovies} />{' '}
          </div>
          <p className="main-page-text">Upcoming </p>
          <div>
            <Swimlane type="movie" posters={UpcomingMovies} />
          </div>
        </div>
      )
    if (this.state.value === 'tv')
      return (
        <div>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value="movie" primaryText="movie" />
            <MenuItem value="tv" primaryText="tv" />
          </DropDownMenu>
          <p className="main-page-text">Popular</p>
          <div>
            <Swimlane type="tv" posters={PopularTV} />{' '}
          </div>
          <p className="main-page-text">Top Rated</p>
          <div>
            <Swimlane type="tv" posters={TopRatedTV} />{' '}
          </div>
          <p className="main-page-text">TV On Air</p>
          <div>
            <Swimlane type="tv" posters={TVOnAir} />
          </div>
        </div>
      )
  }
}

export default HomeComponent
