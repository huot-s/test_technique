import { makeAutoObservable } from "mobx";
import axios from 'axios';

class MovieStore {
  
  popularMovies = []
  
  constructor() {
    makeAutoObservable(this);
  }

  queryListOfMovies() {
    this.popularMovies = [];
    axios
    .get('https://api.themoviedb.org/3/trending/tv/week?api_key=02f4b2b8628683514845992b1dd931ba')
    .then(this.updatePopularMovies);
  }

  updatePopularMovies = t => {
    this.popularMovies = t.data.results;
  }
}

export default MovieStore;
