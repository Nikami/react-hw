import { combineReducers } from 'redux';
import {
  moviesReducer,
  filtersReducer,
} from '../../pages/movies/reducer';
import { movieReducer } from '../../pages/movie-details/reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  filters: filtersReducer,
});

export default rootReducer;
