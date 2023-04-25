import React from "react";
import { inject, observer } from "mobx-react";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import StarRateIcon from '@mui/icons-material/StarRate';
import Stack from '@mui/material/Stack';

const MovieDetails = ({ movieStore }) => 
    <Dialog
    maxWidth="md"
    open={movieStore.currentDisplayMovie}
    onClose={() => movieStore.setDisplay(false)}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description">

        {(!(movieStore.currentDisplayMovieDetails && movieStore.currentDisplayMovieReviews)) ? <></> : <>    
            <DialogTitle id="alert-dialog-title" variant="h4">
                {movieStore.currentDisplayMovieDetails.title}
            </DialogTitle>

            <DialogContent>
                <Stack
                direction="row"
                spacing={2}>
                    <img src={"https://image.tmdb.org/t/p/w200" + movieStore.currentDisplayMovieDetails.poster_path} alt={movieStore.currentDisplayMovie.title}/>

                    <Typography variant="body1" sx={{fontStyle: "italic"}}>
                        {movieStore.currentDisplayMovieDetails.overview}<br/><br/>
                        Released on {movieStore.currentDisplayMovieDetails.release_date}<br/>
                        Rated {movieStore.currentDisplayMovieDetails.vote_average}/10 ({movieStore.currentDisplayMovieDetails.vote_count} votes)<br/>
                        Genres: {movieStore.genres.filter(genre => movieStore.currentDisplayMovieDetails.genre_ids.includes(genre.id)).map(genre => genre.name + " ")}   
                    </Typography>
                </Stack><br/>

                <Typography gutterBottom variant="h5">
                    💯 Reviews 💯
                </Typography>
                    {movieStore.currentDisplayMovieReviews.map(review => 
                        <div key={review.id}>
                            <Typography variant="subtitle1">
                                <strong>{review.author_details.username} ({review.author_details.rating}/10 <StarRateIcon fontSize="small" sx={{ color: "#fcba03" }}/>)</strong> on {review.created_at.substring(0, 10)}
                            </Typography>
                            
                            <Typography variant="body2" sx={{fontStyle: "italic"}}>
                                {review.content}         
                            </Typography><br/>
                        </div>
                    )}
                </DialogContent></>}       
        
        <DialogActions>
            <Button onClick={() => movieStore.setDisplay(false)} autoFocus>
                Close
            </Button>
        </DialogActions>
    </Dialog>

export default inject("movieStore")(observer(MovieDetails));