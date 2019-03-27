import React from 'react';

import MovieList from '../../shared/components/movie-list';
import DetailsFilter from '../details-filter';

export default () => (
  <React.Fragment>
    <DetailsFilter />
    <MovieList movies={[]} />
  </React.Fragment>
);
