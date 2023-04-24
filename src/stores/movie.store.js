import { makeAutoObservable } from "mobx";
import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3';
const genresUrl = baseUrl + "/genre/movie/list?api_key="
const trendingUrl = baseUrl + '/movie/popular?page=1&api_key=';
const trendingUrlFrench = baseUrl + '/movie/popular?page=1&region=FR&api_key=';
const reviewUrl = (id) => 'https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key=';

const apiKey = '02f4b2b8628683514845992b1dd931ba';

class MovieStore {
  
  displayMovie = false
  trendingMoviesList = []
  currentDisplayMovieDetails = null
  currentDisplayMovieReviews = null
  frenchMode = false
  genres = []  

  constructor() {
    makeAutoObservable(this);
  }

  queryListOfMovies() {
    this.frenchMode = false
    axios.get(trendingUrl + apiKey).then(this.updateTrendingMovies);
  }

  queryListOfGenres() {
    axios.get(genresUrl + apiKey).then(this.updateGenres);
  }

  queryMovieReviews(id) {
    axios.get(reviewUrl(id) + apiKey).then(this.updateCurrentMovieReviews);
  }

  updateCurrentMovieReviews = t => {
    this.currentDisplayMovieReviews = t.data.results;
  }

  queryListOfMoviesFrance() {
    this.frenchMode = true
    axios.get(trendingUrlFrench + apiKey).then(this.updateTrendingMovies);
  }

  updateTrendingMovies = t => {
    this.trendingMoviesList = t.data.results;
  }

  updateGenres = t => {
    this.genres = t.data.genres;
  }

  setDisplay = b => {
    this.displayMovie = b;
  }

  setCurrentMovie = m => {
    this.currentDisplayMovieDetails = m;
  }

  switchDisplayMode() {
    if (this.frenchMode) {
      this.queryListOfMovies()
    } else {
      this.queryListOfMoviesFrance()
    }
  }
}

export default MovieStore;
