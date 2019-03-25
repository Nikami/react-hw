import React from 'react';

import Spinner from '../../shared/components/spinner';
import MovieList from '../../shared/components/movie-list';
import SearchFilter from '../search-filter';
import useFetch from '../../../hooks/use-fetch';

const url = 'https://reactjs-cdp.herokuapp.com/movies';

export default () => {
  // TODO: this is just for markup before redux
  const [data, isLoading] = useFetch(url);

  return isLoading ? <Spinner /> : (
    <React.Fragment>

      <SearchFilter moviesCount={data.data.length} />

      <MovieList movies={data.data} />

    </React.Fragment>
  );
};
