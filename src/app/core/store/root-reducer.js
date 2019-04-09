import { combineReducers } from 'redux';
import {
  filterReducer,
  moviesLoadingReducer,
  moviesReducer,
  searchReducer,
} from '../../pages/movies/reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  moviesLoading: moviesLoadingReducer,
  filter: filterReducer,
  search: searchReducer,
});

export default rootReducer;
