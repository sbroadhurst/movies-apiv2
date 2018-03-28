import { connect } from 'react-redux'
import GenreGrid from './GenreGrid'

import {
    setGenreTv,
    setGenreMovies

} from '../reducers/media'

const mapStatetoProps = state => {
    return {
        GenreTv: state.media.GenreTv,
        GenreMovies: state.media.GenreMovies,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setGenreMovies: genreMovies => {
            dispatch(setGenreMovies(genreMovies))
        },
        setGenreTv: genreTv => {
            dispatch(setGenreTv(genreTv))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(GenreGrid)
