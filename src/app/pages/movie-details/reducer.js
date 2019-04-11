import {
  MOVIE_CLEAR_ACTION,
  MOVIE_FETCH_ERROR,
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
} from '../shared/types';

export function movieReducer(state = null, action) {
  switch (action.type) {
    case MOVIE_FETCH_SUCCESS:
    case MOVIE_FETCH_ERROR:
      return action.payload;
    case MOVIE_CLEAR_ACTION:
      return null;
    default:
      return state;
  }
}

export function movieLoadingReducer(state = false, action) {
  switch (action.type) {
    case MOVIE_FETCH_REQUEST:
      return true;
    case MOVIE_FETCH_SUCCESS:
    case MOVIE_FETCH_ERROR:
      return false;
    default:
      return state;
  }
}
