import { inject, observer } from "mobx-react";
import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';



const MovieList = ({ movieStore }) => {
  return <Container maxWidth="sm">{movieStore.popularMovies.map(movie => 
    <div><Card sx={{ width: 450 }}>
      <CardMedia
          component="img"
          height="200"
          image={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt={movie.name}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>        
    </Card><br/></div>
  )}</Container>;
};

export default inject("movieStore")(observer(MovieList));
