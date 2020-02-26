import { EventEmitter } from "events";
import  moviesList  from './moviesList.json';

class MoviesStore extends EventEmitter {
    constructor() {
        super();
        this.movies = [...moviesList];
    };

    getMovies() {
        return this.movies;
    };
}

const moviesStore = new MoviesStore;
export default moviesStore;