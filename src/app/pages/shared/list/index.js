import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { containerMUI } from '../mui-styles';

import './styles.scss';

function sliceDateStr(str) {
  return str.substring(0, 4);
}

function joinToStrByComma(genres) {
  return genres.join(' & ');
}


const List = ({ movies, classes }) => (
  <div className={`${classes.container} movie-list`}>
    {movies.map(movie => (

      <div
        key={movie.id}
        className="movie-list__item"
      >

        <img
          src={movie.poster_path}
          alt={movie.title}
          className="movie-list__poster"
        />

        <div className="movie-list__info">

          <h4 className="movie-list__title">
            {movie.title}
          </h4>

          <div className="movie-list__year">
            {sliceDateStr(movie.release_date)}
          </div>

        </div>

        <div className="movie-list__genres">
          {joinToStrByComma(movie.genres)}
        </div>

      </div>

    ))}
  </div>
);

export default withStyles(containerMUI)(List);
