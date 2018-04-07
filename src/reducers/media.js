import * as action from './actions'

//movies

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
//poster
export const setSelectedPoster = movies => {
  return {
    type: action.SELECTED_POSTER,
    payload: { SelectedPoster: movies }
  }
}

export const setSimilar = movies => {
  return {
    type: action.SIMILAR,
    payload: { Similar: movies }
  }
}
//GENRE SELECTED
export const setGenreMovies = movies => {
  return {
    type: action.GENRE_MOVIES,
    payload: { GenreMovies: movies }
  }
}

export const setGenreTv = movies => {
  return {
    type: action.GENRE_TV,
    payload: { GenreTv: movies }
  }
}
//search
export const setSearchText = movies => {
  console.log('in here search text')
  return {
    type: action.SEARCH_TEXT,
    payload: { SearchText: movies }
  }
}

export const setSearchResultsMovies = movies => {
  return {
    type: action.SEARCH_RESULTS_MOVIES,
    payload: { SearchResultsMovies: movies }
  }
}

export const setSearchResultsTv = movies => {
  return {
    type: action.SEARCH_RESULTS_TV,
    payload: { SearchResultsTv: movies }
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
  },
  //Poster
  [action.SELECTED_POSTER]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.SIMILAR]: (state, action) => {
    return { ...state, ...action.payload }
  },
  //Genre Search
  [action.GENRE_MOVIES]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.GENRE_TV]: (state, action) => {
    return { ...state, ...action.payload }
  },
  //Search
  [action.SEARCH_TEXT]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.SEARCH_RESULTS_MOVIES]: (state, action) => {
    return { ...state, ...action.payload }
  },
  [action.SEARCH_RESULTS_TV]: (state, action) => {
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
  TVOnAir: [],
  SelectedPoster: [],
  Similar: [],
  GenreTv: [],
  GenreMovies: [],
  SearchText: '',
  SearchResultsMovies: [],
  SearchResultsTv: []
}

export const reducer = (state = defaultState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
