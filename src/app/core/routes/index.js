// @flow
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { ROUTES } from '../config';
import Movies from '../../pages/movies';
import MovieDetails from '../../pages/movie-details';
import NotFound from '../not-found';

export default () => (
  <Switch>
    <Route path={ROUTES.movies} exact component={Movies} />
    <Route path={`${ROUTES.film}`} exact component={MovieDetails} />
    <Route path={`${ROUTES.film}/:id`} exact component={MovieDetails} />
    <Route component={NotFound} />
  </Switch>
);
