import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";

import "./index.css";
import App from "./App";
import MovieStore from "./stores/movie.store";

const stores = {
  movieStore: new MovieStore(),
};

stores.movieStore.queryListOfMovies();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
