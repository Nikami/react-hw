import { combineReducers } from 'redux';
import { moviesLoadingReducer, moviesReducer } from '../../pages/movies/reducer';

export const rootReducer = combineReducers({
  movies: moviesReducer,
  moviesLoading: moviesLoadingReducer,
});

export default rootReducer;
