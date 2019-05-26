import React from 'react';
import { connect } from 'react-redux';
import Movies from '../src/app/movies';
import { fetchMovies } from '../src/redux/actions/movies';
import { moviesFilterSelector } from '../src/app/movies/selectors';

const IndexPage = () => <Movies />;
IndexPage.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(fetchMovies());
  console.log('reduxStore=', reduxStore.getState());
  return {};
};

const mapStateToProps = state => {
  console.log('state=', state);
  return {
    movies: moviesFilterSelector(state),
    isLoading: state.movies.isLoading,
  };
};

export default connect(mapStateToProps)(IndexPage);
