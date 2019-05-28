// flow
import { combineReducers } from 'redux';
import { filtersReducer, moviesReducer } from '../pages/movies/reducer';
import { movieReducer } from '../pages/movie-details/reducer';
import type { FilterState, MoviesState } from '../pages/movies/reducer';

type AppState = {|
  movies: MoviesState,
  movie: any,
  filters: FilterState
|};

export const rootReducer: AppState = combineReducers({
  movies: moviesReducer,
  movie: movieReducer,
  filters: filtersReducer,
});

export default rootReducer;
export type { AppState };
