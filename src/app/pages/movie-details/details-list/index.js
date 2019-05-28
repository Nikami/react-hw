// @flow
import React from 'react';

import MovieList from '../../shared/components/movie-list';
import DetailsFilter from '../details-filter';
import type { AppState } from '../../../redux/root-reducer';

export default ({ movies }: AppState) => (
  <React.Fragment>
    <DetailsFilter />
    { movies.length > 0
      ? (<MovieList movies={movies} />)
      : (<h2 className="not-found">Movies not found</h2>)
    }
  </React.Fragment>
);
