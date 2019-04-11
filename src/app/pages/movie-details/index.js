import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

import { fetchMovies } from '../shared/actions/movies';
import { fetchMovie } from '../shared/actions/movie';
import { moviesByGenreSelector } from './selectors';
import Spinner from '../shared/components/spinner';
import DetailsBar from './details-bar';
import DetailsList from './details-list';

export class MovieDetails extends Component {
  componentDidMount() {
    const { match, movies } = this.props;
    if (match.params.id) {
      this.props.fetchMovie(match.params.id);

      if (movies.length === 0) {
        this.props.fetchMovies();
      }
    }
  }

  render() {
    const { isLoading, movie, movies } = this.props;

    return isLoading ? <Spinner /> : (
      <section className="movies">
        <DetailsBar movie={movie} />
        <DetailsList movies={movies} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movie,
  isLoading: state.movieLoading,
  movies: moviesByGenreSelector(state),
});

const mapDispatchToProps = { fetchMovie, fetchMovies };

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MovieDetails),
);
