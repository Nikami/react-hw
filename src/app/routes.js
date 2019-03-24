import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Movies from './pages/movies';
import MovieDetails from './pages/movie-details';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Movies} />
    <Route path="/details" exact component={MovieDetails} />
  </Switch>
);

export default Routes;
