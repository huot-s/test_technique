import { makeAutoObservable } from "mobx";
import axios from 'axios';

class MovieStore {
  
  popularMovies = []
  genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]
  
  constructor() {
    makeAutoObservable(this);
  }

  queryListOfMovies() {
    this.popularMovies = [];
    axios
    .get('https://api.themoviedb.org/3/trending/movie/week?api_key=02f4b2b8628683514845992b1dd931ba')
    .then(this.updatePopularMovies);
  }

  filterFrenchMovies = t => {
    this.popularMovies = this.popularMovies.filter(movie => movie.original_language == "ja");
  }

  updatePopularMovies = t => {
    this.popularMovies = t.data.results;
  }
}

export default MovieStore;
