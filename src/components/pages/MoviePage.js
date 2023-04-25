import MovieList from "../movies/MovieList";
import MovieDetails from "../movies/MovieDetails";

import React from "react";
import { inject, observer } from "mobx-react";

import Fab from '@mui/material/Fab';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const MainPage = ({ movieStore }) => 
  <div>
    <Fab 
    sx={{position: 'fixed',  bottom: 50,  right: 50,}}
    onClick={() => movieStore.switchDisplayMode()} 
    variant="extended" 
    color={movieStore.frenchMode ? "success": "primary"}>
      <FilterAltIcon sx={{ mr: 1 }} />
      {movieStore.frenchMode ? "International" : "French"} mode
    </Fab>
    <MovieDetails/>
    <MovieList />
  </div>;

export default inject("movieStore")(observer(MainPage));
