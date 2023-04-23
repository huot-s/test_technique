import { makeAutoObservable } from "mobx";
import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org';
const trendingUrl = baseUrl + '/3/movie/popular?api_key=';
const reviewUrl = (id) => 'https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key=';

const apiKey = '02f4b2b8628683514845992b1dd931ba';

class MovieStore {
  
  displayMovie = false
  trendingMoviesList = []
  currentDisplayMovieDetails = null
  currentDisplayMovieReviews = null

  genres = [{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]
  
  constructor() {
    makeAutoObservable(this);
  }

  queryListOfMovies() {
    axios.get(trendingUrl + apiKey).then(this.updateTrendingMovies);
  }

  queryMovieReviews(id) {
    axios.get(reviewUrl(id) + apiKey).then(this.updateCurrentMovieReviews);
  }

  updateCurrentMovieReviews = t => {
    this.currentDisplayMovieReviews = t.data.results;
  }

  filterFrenchMovies = t => {
    this.trendingMoviesList = this.trendingMoviesList.filter(movie => movie.original_language == "ja");
  }

  updateTrendingMovies = t => {
    this.trendingMoviesList = t.data.results;
  }

  setDisplay = b => {
    this.displayMovie = b;
  }

  setCurrentMovie = m => {
    this.currentDisplayMovieDetails = m;
  }
}

export default MovieStore;
