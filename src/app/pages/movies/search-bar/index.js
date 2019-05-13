import React, { useState, useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { ROUTES } from '../../../core/config';
import { searchInArray, searchInString } from '../../shared/utils';
import { doMoviesSearchBy, doMoviesSearchQuery } from '../../../redux/actions/movies';
import { doMovieClear } from '../../../redux/actions/movie';
import BgContainer from '../../shared/components/bg-container';
import Roulette from '../../shared/components/roulette';

import './styles.scss';

const BTN_PRIMARY_COLOR = 'primary';
const BTN_SECONDARY_COLOR = 'secondary';

const SEARCH_PARAM = {
  title: 'title',
  genre: 'genre',
};

export const SearchBar = ({
  searchBy,
  movies,
  history,
  ...props
}) => {
  const [titleBtnColor, setTitleBtnColor] = useState(
    searchBy === SEARCH_PARAM.title ? BTN_PRIMARY_COLOR : BTN_SECONDARY_COLOR,
  );
  const [genreBtnColor, setGenreBtnColor] = useState(
    searchBy === SEARCH_PARAM.genre ? BTN_PRIMARY_COLOR : BTN_SECONDARY_COLOR,
  );
  const [query, setQuery] = useState('');

  // clean store
  useEffect(() => {
    props.doMoviesSearchQuery('');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = movies.find(m => (
      searchBy === SEARCH_PARAM.genre
        ? searchInArray(query, m.genres)
        : searchInString(query, m.title)
    ));

    props.doMovieClear();

    if (movie) {
      history.push(`${ROUTES.film}/${movie.id}`);
    } else {
      history.push(`${ROUTES.film}`);
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
    props.doMoviesSearchQuery(e.target.value);
  };
  const searchByTitle = () => {
    setTitleBtnColor(BTN_PRIMARY_COLOR);
    setGenreBtnColor(BTN_SECONDARY_COLOR);
    props.doMoviesSearchBy(SEARCH_PARAM.title);
  };
  const searchByGenre = () => {
    setGenreBtnColor(BTN_PRIMARY_COLOR);
    setTitleBtnColor(BTN_SECONDARY_COLOR);
    props.doMoviesSearchBy(SEARCH_PARAM.genre);
  };

  return (
    <BgContainer>
      <Roulette />

      <form onSubmit={handleSubmit}>
        <Typography
          component="h6"
          variant="h6"
          gutterBottom
          className="text-uppercase"
        >
          Find your movie
        </Typography>

        <TextField
          onChange={handleSearch}
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
              color={titleBtnColor}
              onClick={searchByTitle}
              type="button"
              size="small"
              variant="contained"
            >
              Title
            </Button>

            <Button
              color={genreBtnColor}
              onClick={searchByGenre}
              type="button"
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

const mapStateToProps = ({ movies, filters }) => ({
  movies: movies.data,
  searchBy: filters.searchBy,
});

const mapDispatchToProps = { doMoviesSearchBy, doMoviesSearchQuery, doMovieClear };
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withRouter,
  withConnect,
)(SearchBar);
