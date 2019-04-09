import { combineReducers } from 'redux';
import {
  filterReducer,
  moviesLoadingReducer,
  moviesReducer,
  searchReducer,
} from '../../pages/movies/reducer';
import { movieLoadingReducer, movieReducer } from '../../pages/movie-details/reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  moviesLoading: moviesLoadingReducer,

  filter: filterReducer,
  search: searchReducer,

  movie: movieReducer,
  movieLoading: movieLoadingReducer,
});

export default rootReducer;
