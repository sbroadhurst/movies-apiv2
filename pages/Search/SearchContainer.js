import { connect } from 'react-redux'
import SearchComponent from './SearchComponent'

import {
  setSearchResultsMovies,
  setSearchResultsTv
} from '../../reducers/media'

const mapStatetoProps = state => {
  return {
    SearchResultsMovies: state.media.SearchResultsMovies,
    SearchResultsTv: state.media.SearchResultsTv
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setSearchResultsMovies: searchResultsMovies => {
      dispatch(setSearchResultsMovies(searchResultsMovies))
    },
    setSearchResultsTv: searchResultsTv => {
      dispatch(setSearchResultsTv(searchResultsTv))
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(SearchComponent)
