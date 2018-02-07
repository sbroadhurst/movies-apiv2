import * as action from './actions'

//movies

export const init = message => {
  return {
    type: action.INIT,
    payload: { message: message }
  }
}
export const setNowPlayingMovies = movies => {
  return {
    type: action.NOW_PLAYING_MOVIES,
    payload: { NowPlayingMovies: movies }
  }
}

export const setPopularMovies = movies => {
  return {
    type: action.POPULAR_MOVIES,
    payload: { PopularMovies: movies }
  }
}
export const setUpcomingMovies = movies => {
  return {
    type: action.UPCOMING_MOVIES,
    payload: { UpcomingMovies: movies }
  }
}
export const setTopRatedMovies = movies => {
  return {
    type: action.TOP_RATED_MOVIES,
    payload: { TopRatedMovies: movies }
  }
}
//tv
export const setPopularTV = movies => {
  return {
    type: action.POPULAR_TV,
    payload: { PopularTV: movies }
  }
}
export const setTopRatedTV = movies => {
  return {
    type: action.TOP_RATED_TV,
    payload: { TopRatedTV: movies }
  }
}
export const setTVOnAir = movies => {
  return {
    type: action.TV_ON_AIR,
    payload: { TVOnAir: movies }
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
  NowPlayingMovies: [],
  TopRatedMovies: [],
  UpcomingMovies: [],
  PopularMovies: [],
  TopRatedTV: [],
  PopularTV: [],
  TVOnAir: []
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
