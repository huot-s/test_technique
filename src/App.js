import React from "react";
import { css } from '@emotion/css'

import MoviePage from "./components/pages/MoviePage";

const App = () => {
  return (
    <div className={css`
      min-height: 100vh;
      background-color: #F2F2F2;
    `}>
      <header className={css`
        position: relative;
        height: 150px;
        line-height: 150px;
        background-color: #555555;
        text-align: center;
        color: white;
        font-weight: bold;
        font-size: 1.5rem;
      `}>
        Bienvenue dans Ask for movies
      </header>
      <main className={css`
        min-height: calc(100vh - 150px);
        display: flex;
      `}>
        <MoviePage />
      </main>
    </div>
  );
};

export default App;
