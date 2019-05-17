import { combineReducers } from 'redux';
import { filtersReducer, moviesReducer } from '../app/movies/reducer';
import { movieReducer } from '../app/film/reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  filters: filtersReducer,
});

export default rootReducer;
