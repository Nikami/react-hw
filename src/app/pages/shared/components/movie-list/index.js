import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';
import { containerMUI } from '../../mui-styles';

import { ROUTES } from '../../../../core/config';
import Movie from '../movie';
import './styles.scss';

const MovieList = ({ movies, classes }) => (
  <div className={`${classes.container} movie-list`}>
    {movies.map(movie => (

      <Link to={`${ROUTES.details}/${movie.id}`} className="link-reset">
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
          release_date={movie.release_date}
          genres={movie.genres}
        />
      </Link>

    ))}
  </div>
);

export default withStyles(containerMUI)(MovieList);
