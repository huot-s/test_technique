import { inject, observer } from "mobx-react";
import React from "react";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';



const MovieList = ({ movieStore }) => {
  return <Grid container spacing={2}>{movieStore.popularMovies.map(movie => 
    <Grid xs={3}><Card sx={{height: "100%"}}>
      <CardMedia
          component="img"
          height="200"
          image={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt={movie.name}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Released on {movie.release_date}<br/>
          Rated {movie.vote_average}/10 ({movie.vote_count} votes)<br/>
          Genres: {movieStore.genres.filter(genre => movie.genre_ids.includes(genre.id)).map(genre => genre.name + " ")}
        </Typography><br/>
        <Typography variant="body2" color="text.secondary">
          {movie.overview}
        </Typography>
      </CardContent>        
    </Card></Grid>
  )}</Grid>;
};

export default inject("movieStore")(observer(MovieList));
