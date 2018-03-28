import React from 'react';
import Poster from '../components/Poster'

class GenreGrid extends React.Component {
    componentWillMount() {
        this.loadGenreTv()
        this.LoadGenreMovies()
    }

    loadGenreTv() {
        let id = this.props.match.params.id
        fetch(
            'https://api.themoviedb.org/3/discover/tv?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&sort_by=popularity.desc&page=1&with_genres=' + id
        )
            .then(res => {
                return res.json()
            })
            .then(res => {
                // console.log(res)
                //          this.setState({ popularTv: res.results })
                this.props.setGenreTv(res.results)
            })
    }

    LoadGenreMovies() {
        let id = this.props.match.params.id
        fetch(
            ' https://api.themoviedb.org/3/genre/' + id + '/movies?api_key=4d6322cf6a2b7554c7e6ffbaec593010&language=en-US&include_adult=false&sort_by=created_at.asc'
        )
            .then(res => {
                return res.json()
            })
            .then(res => {
                // console.log(res)
                //          this.setState({ popularTv: res.results })
                this.props.setGenreMovies(res.results)
            })
    }

    mapMovies(GenreMovies) {
        if (GenreMovies !== undefined)
            return (
                <div>
                    <div className='main-page-text'> {this.props.match.params.genre} Movies</div><br />
                    {GenreMovies.map((info, index) => {
                        return (
                            <Poster
                                key={index}
                                info={info}
                                id={info.id}
                                select={'movie'}
                            />
                        )
                    })}
                </div>
            )
    }

    mapTV(GenreTv) {
        if (GenreTv !== undefined)
            return (
                <div>
                    <div className='main-page-text'>{this.props.match.params.genre} TV Shows</div><br />
                    {GenreTv.map((info, index) => {
                        return (
                            <Poster
                                key={index}
                                info={info}
                                id={info.id}
                                select={'tv'}
                            />
                        )
                    })}
                </div>
            )

    }

    render() {
        const { GenreMovies, GenreTv } = this.props
        console.log(this.props)
        return (
            <div> {this.mapMovies(GenreMovies)} {this.mapTV(GenreTv)}</div>
        )

    }

}

export default GenreGrid;