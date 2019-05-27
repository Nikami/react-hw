import React, { Component } from 'react';
import { connect } from 'react-redux';

import { moviesFilterSelector } from '../selectors';

import Spinner from '../../../shared/components/spinner';
import SearchFilter from '../search-filter';
import MovieList from '../../../shared/components/movie-list';

class SearchList extends Component {
  render() {
    const { isLoading, movies } = this.props;
    console.log(this.props);
    console.log(movies);

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
  isLoading: state.movies.isLoading,
});

export default connect(
  mapStateToProps
)(SearchList);
