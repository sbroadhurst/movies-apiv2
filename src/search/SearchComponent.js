import React from 'react'
import Poster from '../components/Poster'

let oldSearch

class SearchComponent extends React.Component {
  componentWillMount() {
    this.getSearchResultsMovies()
    this.getSearchResultsTv()
  }

  componentDidUpdate() {
    let query = this.props.match.params.text
    if (query !== oldSearch) {
      console.log('will update')
      this.getSearchResultsMovies()
      this.getSearchResultsTv()

      oldSearch = this.props.match.params.text
    }
  }

  getSearchResultsMovies() {
    let query = this.props.match.params.text
    fetch(
      'https://api.themoviedb.org/3/search/movie?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&query=' +
        query +
        '&page=1&include_adult=false'
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.props.setSearchResultsMovies(res.results)
      })
  }

  mapSearchMovies(SearchResultsMovies) {
    if (SearchResultsMovies !== undefined)
      return (
        <div>
          <div className="main-page-text"> Movie Results</div>
          <br />
          {SearchResultsMovies.map((info, index) => {
            return (
              <Poster key={index} info={info} id={info.id} select={'movie'} />
            )
          })}
        </div>
      )
  }

  getSearchResultsTv() {
    let query = this.props.match.params.text
    fetch(
      'https://api.themoviedb.org/3/search/tv?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&query=' +
        query +
        '&page=1'
    )
      .then(res => {
        return res.json()
      })
      .then(res => {
        this.props.setSearchResultsTv(res.results)
      })
  }

  mapSearchTv(SearchResultsTv) {
    if (SearchResultsTv !== undefined)
      return (
        <div>
          <div className="main-page-text"> TV Results </div>
          <br />
          {SearchResultsTv.map((info, index) => {
            return <Poster key={index} info={info} id={info.id} select={'tv'} />
          })}
        </div>
      )
  }

  render() {
    // console.log(this.props)
    const { SearchResultsMovies, SearchResultsTv } = this.props
    return (
      <div>
        {' '}
        {this.mapSearchMovies(SearchResultsMovies)}{' '}
        {this.mapSearchTv(SearchResultsTv)}
      </div>
    )
  }
}

export default SearchComponent
