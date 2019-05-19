import React, { useEffect } from 'react';
import { withRouter } from 'next/router';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { fetchMovies } from '../../redux/actions/movies';
import { fetchMovie } from '../../redux/actions/movie';
import { moviesByGenreSelector } from './selectors';
import Spinner from '../../shared/components/spinner';
import DetailsBar from './details-bar';
import DetailsList from './details-list';

const MovieDetails = ({
  router,
  isLoading,
  movie,
  movies,
  ...props
}) => {
  useEffect(() => {
    if (router.query.id) {
      props.fetchMovie(router.query.id);

      if (movies.length === 0) {
        props.fetchMovies();
      }
    }
  }, [router.query.id]);

  return isLoading ? <Spinner /> : (
    <section className="movies">
      <DetailsBar movie={movie} />
      <DetailsList movies={movies} />
    </section>
  );
};

const mapStateToProps = state => ({
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
