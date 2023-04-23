import { inject, observer } from "mobx-react";
import React from "react";
import MovieDetails from "../movies/MovieDetails";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const MovieList = ({ movieStore }) => {
  
  return <div><MovieDetails/>
  <Grid container spacing={2}>{movieStore.trendingMoviesList.map(movie => 
    <Grid xs={12} sm={6} md={3} key={movie.id}><Card sx={{height: "100%", display: "flex",
    flexDirection: "column",}}>
      <CardMedia
          component="img"
          height="200"
          image={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
          alt={movie.title}
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
      <CardActions sx={{mt: "auto" }}>
        <Button size="small" onClick={() => {
          movieStore.queryMovieReviews(movie.id);
          movieStore.setCurrentMovie(movie);
          movieStore.setDisplay(true);
        }
          }>Learn More</Button>
      </CardActions>        
    </Card></Grid>
  )}</Grid></div>;
};

export default inject("movieStore")(observer(MovieList));
