import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchMovies } from '../actions';
import { moviesFilterSelector } from '../selectors';

import Spinner from '../../shared/components/spinner';
import SearchFilter from '../search-filter';
import MovieList from '../../shared/components/movie-list';

class SearchList extends Component {
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    const { isLoading, movies } = this.props;

    return isLoading ? <Spinner /> : (
      <React.Fragment>
        <SearchFilter moviesCount={movies.length} />
        <MovieList movies={movies} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movies: moviesFilterSelector(state),
  isLoading: state.moviesLoading,
});

const mapDispatchToProps = { fetchMovies };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchList);
