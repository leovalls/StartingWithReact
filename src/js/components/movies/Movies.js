import React from 'react';

import Movie from '../movie/Movie';
import Shoutouts from '../shoutouts/Shoutouts';
import MoviesStore from '../../stores/MoviesStore';

export default class Movies extends React.Component {
    constructor() {
        super();
        
        this.state = {
            movies: MoviesStore.getMovies()
        }
    }

    render() {
        const {movies} = this.state;
        const moviesList = movies.map((movie) => {
            return <Movie key={movie.episode_id} {...movie} />
        });

        return (
            <div>
                <h2>Movies List</h2>
                <ul>{moviesList}</ul>
            </div>
        );
    }
}