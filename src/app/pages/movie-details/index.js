// @flow
import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchMovies } from '../../redux/actions/movies';
import { fetchMovie } from '../../redux/actions/movie';
import { moviesByGenreSelector } from './selectors';
import Spinner from '../shared/components/spinner';
import DetailsBar from './details-bar';
import DetailsList from './details-list';
import type { AppState } from '../../redux/root-reducer';

const MovieDetails = ({
  match,
  isLoading,
  movie,
  movies,
  ...props
}: AppState) => {
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

const mapStateToProps = (state: AppState) => ({
  movie: state.movie.data,
  isLoading: state.movie.isLoading,
  movies: moviesByGenreSelector(state),
});

const mapDispatchToProps = { fetchMovie, fetchMovies };
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withRouter,
  withConnect,
)(MovieDetails);
