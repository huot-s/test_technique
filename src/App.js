import React from "react";
import { css } from '@emotion/css'

import MoviePage from "./components/pages/MoviePage";

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LiveTvIcon from '@mui/icons-material/LiveTv';

const App = () => {
  return (
    <div className={css`
      min-height: 100vh;
      background-color: #F2F2F2;
    `}>
    <AppBar position="static">
      <Container maxWidth="l">
        <Toolbar disableGutters>
          <LiveTvIcon sx={{ fontSize: 40,  mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            ASK FOR MOVIE
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
      <main className={css`
        margin: 30px;
      `}>
        <MoviePage />
      </main>
    </div>
  );
};

export default App;
