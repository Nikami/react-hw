import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import connect from 'react-redux/es/connect/connect';

import { fetchMovies } from '../shared/actions/movies';
import { fetchMovie } from '../shared/actions/movie';
import { moviesByGenreSelector } from './selectors';
import Spinner from '../shared/components/spinner';
import DetailsBar from './details-bar';
import DetailsList from './details-list';

const MovieDetails = ({
  match,
  isLoading,
  movie,
  movies,
  ...props
}) => {
  useEffect(() => {
    if (match.params.id) {
      props.fetchMovie(match.params.id);

      if (movies.length === 0) {
        props.fetchMovies();
      }
    }
  }, [match.params.id]);

  return isLoading ? <Spinner /> : (
    <section className="movies">
      <DetailsBar movie={movie} />
      <DetailsList movies={movies} />
    </section>
  );
};

const mapStateToProps = state => ({
  movie: state.movie,
  isLoading: state.movieLoading,
  movies: moviesByGenreSelector(state),
});

const mapDispatchToProps = { fetchMovie, fetchMovies };
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withRouter,
  withConnect,
)(MovieDetails);
