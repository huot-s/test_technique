import { makeAutoObservable } from "mobx";
import axios from 'axios';


// TMDb API URLs
const baseUrl = 'https://api.themoviedb.org/3';

const genresUrl = baseUrl + "/genre/movie/list?api_key="
const trendingUrl = baseUrl + '/movie/popular?page=1&api_key=';
const trendingUrlFrench = baseUrl + '/movie/popular?page=1&region=FR&api_key=';
const reviewUrl = (id) => 'https://api.themoviedb.org/3/movie/' + id + '/reviews?api_key=';

const apiKey = '02f4b2b8628683514845992b1dd931ba';

class MovieStore {
  
  currentDisplayMovie = false
  currentDisplayMovieDetails = null
  currentDisplayMovieReviews = null

  trendingMoviesList = []
  genres = []  

  frenchMode = false
  
  constructor() {
    makeAutoObservable(this);

    //init list of genres
    this.queryListOfGenres();
  }

  //switch between international and french mode
  switchDisplayMode() {
    this.frenchMode ? this.queryListOfMovies() : this.queryListOfMoviesFrance();
    this.frenchMode = !this.frenchMode;
  }

  //set the movie info that will be displayed on dialog page
  setCurrentMovieDisplay(movie) {
    this.currentDisplayMovieDetails = movie;
    this.queryMovieReviews(movie.id);
  }

  //query trending movies
  queryListOfMovies() {
    axios.get(trendingUrl + apiKey).then(this.updateTrendingMovies);
  }

  //query trending movies available in France
  queryListOfMoviesFrance() {
    axios.get(trendingUrlFrench + apiKey).then(this.updateTrendingMovies);
  }

  //query list of available genres for movies
  queryListOfGenres() {
    axios.get(genresUrl + apiKey).then(this.updateGenres);
  }

  //query reviews for a movie identified by id
  queryMovieReviews(id) {
    axios.get(reviewUrl(id) + apiKey).then(this.updateCurrentMovieReviews);
  }

  updateTrendingMovies = t => {
    this.trendingMoviesList = t.data.results;
  }

  updateGenres = t => {
    this.genres = t.data.genres;
  }

  updateCurrentMovieReviews = t => {
    this.currentDisplayMovieReviews = t.data.results;
  }

  setDisplay = b => {
    this.currentDisplayMovie = b;
  }
}

export default MovieStore;
