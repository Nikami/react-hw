import { MOVIES_FETCH_ERROR, MOVIES_FETCH_REQUEST, MOVIES_FETCH_SUCCESS } from '../shared/types';

export function moviesReducer(state = [], action) {
  switch (action.type) {
    case MOVIES_FETCH_SUCCESS:
    case MOVIES_FETCH_ERROR:
      return action.payload;
    default:
      return state;
  }
}

export function moviesLoadingReducer(state = false, action) {
  switch (action.type) {
    case MOVIES_FETCH_REQUEST:
      return true;
    case MOVIES_FETCH_SUCCESS:
    case MOVIES_FETCH_ERROR:
      return false;
    default:
      return state;
  }
}
