import { connect } from 'react-redux'
import PageComponent from './PageComponent'

import {
  setNowPlayingMovies,
  setPopularMovies,
  setUpcomingMovies,
  setTopRatedMovies,
  setTVOnAir,
  setPopularTV,
  setTopRatedTV
} from '../reducers/media'

const mapStatetoProps = state => {
  return {
    NowPlayingMovies: state.media.NowPlayingMovies,
    PopularMovies: state.media.PopularMovies,
    TopRatedMovies: state.media.TopRatedMovies,
    UpcomingMovies: state.media.UpcomingMovies,
    PopularTV: state.media.PopularTV,
    TopRatedTV: state.media.TopRatedTV,
    TVOnAir: state.media.TVOnAir
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNowPlayingMovies: nowPlayingMovies => {
      dispatch(setNowPlayingMovies(nowPlayingMovies))
    },
    setPopularMovies: popularMovies => {
      dispatch(setPopularMovies(popularMovies))
    },
    setUpcomingMovies: upcomingMovies => {
      dispatch(setUpcomingMovies(upcomingMovies))
    },
    setTopRatedMovies: topRatedMovies => {
      dispatch(setTopRatedMovies(topRatedMovies))
    },
    setPopularTV: popularTV => {
      dispatch(setPopularTV(popularTV))
    },
    setTopRatedTV: topRatedTV => {
      dispatch(setTopRatedTV(topRatedTV))
    },
    setTVOnAir: tvOnAir => {
      dispatch(setTVOnAir(tvOnAir))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(PageComponent)
