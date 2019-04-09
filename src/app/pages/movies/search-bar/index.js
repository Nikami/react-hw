import React, { useState } from 'react';
import _ from 'underscore';
import connect from 'react-redux/es/connect/connect';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { moviesSearchAction } from '../actions';
import BgContainer from '../../shared/components/bg-container';
import Roulette from '../../shared/components/roulette';

import './styles.scss';

export const SearchBar = ({ dispatch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(moviesSearchAction({ query }));
  };
  const handleSearch = _.debounce(v => setQuery(v), 300);

  return (
    <BgContainer>
      <Roulette />

      <form autoComplete="off" onSubmit={handleSubmit}>
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
          onChange={e => handleSearch(e.target.value)}
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
              type="button"
              color="primary"
              size="small"
              variant="contained"
            >
              Title
            </Button>

            <Button
              type="button"
              color="secondary"
              size="small"
              variant="contained"
            >
              Genre
            </Button>

          </div>

          <Button
            type="submit"
            color="primary"
            size="medium"
            variant="contained"
          >
            Search
          </Button>
        </div>
      </form>
    </BgContainer>
  );
};

export default connect()(SearchBar);
