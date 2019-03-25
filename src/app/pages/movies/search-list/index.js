import React from 'react';

import MovieList from '../../shared/components/movie-list';
import SearchFilter from '../search-filter';
import useFetch from '../../../hooks/use-fetch';

const url = 'https://reactjs-cdp.herokuapp.com/movies';

export default () => {
  // TODO: this is just for markup before redux
  const [data, isLoading] = useFetch(url);

  // TODO: add loader
  return isLoading ? 'Loading...' : (
    <React.Fragment>

      <SearchFilter />

      <MovieList movies={data.data} />

    </React.Fragment>
  );
};
