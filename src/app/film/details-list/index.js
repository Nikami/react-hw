import React, { Fragment } from 'react';

import MovieList from '../../../shared/components/movie-list';
import DetailsFilter from '../details-filter';
import Error from '../../../core/error';

export default ({ movies }) => (
  movies.length > 0 ? (
    <Fragment>
      <DetailsFilter />
      <MovieList movies={movies} />
    </Fragment>
  ) : (<Error code="" error="No same movies" />)
);
