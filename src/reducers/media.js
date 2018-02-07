import * as action from './actions'

//movies

export const init = message => {
  return {
    type: action.INIT,
    payload: { message: message }
  }
}
export const NowPlayingMovies = movies => {
  return {
    type: action.NOW_PLAYING_MOVIES,
    payload: { nowPlayingMovies: movies }
  }
}

export const PopularMovies = movies => {
  return {
    type: action.POPULAR_MOVIES,
    payload: { popularMovies: movies }
  }
}
export const UpcomingMovies = movies => {
  return {
    type: action.UPCOMING_MOVIES,
    payload: { upcomingMovies: movies }
  }
}
export const TopRatedMovies = movies => {
  return {
    type: action.TOP_RATED_MOVIES,
    payload: { topRatedMovies: movies }
  }
}
//tv
export const PopularTV = movies => {
  return {
    type: action.POPULAR_TV,
    payload: { popularTV: movies }
  }
}
export const TopRatedTV = movies => {
  return {
    type: action.TOP_RATED_TV,
    payload: { topRatedTV: movies }
  }
}
export const TVOnAir = movies => {
  return {
    type: action.TV_ON_AIR,
    payload: { tvOnAir: movies }
  }
}

const ACTION_HANDLERS = {
  [action.SET_STATE]: (state, action) => {
    return { ...state, ...action.payload }
  },
  //MOVIES
  [action.NOW_PLAYING_MOVIES]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.POPULAR_MOVIES]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.UPCOMING_MOVIES]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.TOP_RATED_MOVIES]: (state, action) => {
    return { ...state, ...action.payload }
  },
  //TV
  [action.POPULAR_TV]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.TOP_RATED_TV]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.TV_ON_AIR]: (state, action) => {
    return { ...state, ...action.payload }
  }
}

let defaultState = {
  nowPlaying: [],
  nowPlayingMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  popularMovies: [],
  topRatedTV: [],
  popularTV: [],
  tvOnAir: []
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
