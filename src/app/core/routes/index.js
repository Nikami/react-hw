import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from '../config';
import Movies from '../../pages/movies';
import MovieDetails from '../../pages/movie-details';

export default () => (
  <Switch>
    <Route path={ROUTES.movies} exact component={Movies} />
    <Route path={`${ROUTES.details}/:id`} exact component={MovieDetails} />
  </Switch>
);
