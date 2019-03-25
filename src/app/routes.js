import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from './pages/movies';
import MovieDetails from './pages/movie-details';

export default () => (
  <Switch>
    <Route path="/" exact component={Movies} />
    <Route path="/details" exact component={MovieDetails} />
  </Switch>
);
