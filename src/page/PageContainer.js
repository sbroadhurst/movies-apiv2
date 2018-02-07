import { connect } from 'react-redux'

import PageComponent from './PageComponent'

import {
  NowPlayingMovies,
  PopularMovies,
  UpcomingMovies,
  TopRatedMovies,
  TVOnAir,
  PopularTV,
  TopRatedTV
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
    NowPlayingMovies: nowPlayingMovies => {
      dispatch(NowPlayingMovies(nowPlayingMovies))
    },
    PopularMovies: popularMovies => {
      dispatch(PopularMovies(popularMovies))
    },
    UpcomingMovies: upcomingMovies => {
      dispatch(UpcomingMovies(upcomingMovies))
    },
    TopRatedMovies: topRatedMovies => {
      dispatch(TopRatedMovies(topRatedMovies))
    },
    PopularTV: popularTV => {
      dispatch(PopularTV(popularTV))
    },
    TopRatedTV: topRatedTV => {
      dispatch(TopRatedTV(topRatedTV))
    },
    TVOnAir: tvOnAir => {
      dispatch(TVOnAir(tvOnAir))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(PageComponent)
