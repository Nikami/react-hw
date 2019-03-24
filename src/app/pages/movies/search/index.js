import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import './styles.scss';

export default () => (
  <form autoComplete="off">

    <Typography
      component="h6"
      variant="h6"
      gutterBottom
      className="text-uppercase"
    >
      Find your movie
    </Typography>

    <TextField
      id="search"
      placeholder="Search"
      className="search-field"
      margin="none"
    />

    <div className="search-actions">

      <div className="search-actions__toolbar">

        <Typography
          component="span"
          variant="subtitle2"
          className="text-uppercase"
        >
          Search&nbsp;By
        </Typography>

        <Button
          color="primary"
          size="small"
          variant="contained"
        >
          Title
        </Button>

        <Button
          color="secondary"
          size="small"
          variant="contained"
        >
          Genre
        </Button>

      </div>

      <Button
        color="primary"
        size="medium"
        variant="contained"
      >
        Search
      </Button>

    </div>

  </form>
);
