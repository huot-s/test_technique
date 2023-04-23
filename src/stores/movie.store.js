import { makeAutoObservable } from "mobx";

class MovieStore {
  popularMovies = null
  
  constructor() {
    makeAutoObservable(this);
  }
  
  // write some code here to query the API
}

export default MovieStore;
