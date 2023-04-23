import React from "react";
import { css } from '@emotion/css'
import MovieList from "../movies/MovieList";
import { inject, observer } from "mobx-react";
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const MainPage = ({ movieStore }) => {
  return (
    <div>
      <Fab sx={{position: 'fixed',  bottom: 50,  right: 50,}} onClick={movieStore.filterFrenchMovies} variant="extended" color="success">
        <FilterAltIcon sx={{ mr: 1 }} />
        French mode
      </Fab>
      <MovieList />
    </div>
    
    
  );
};

export default inject("movieStore")(observer(MainPage));
