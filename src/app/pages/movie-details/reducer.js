import {
  MOVIE_CLEAR_ACTION,
  MOVIE_FETCH_ERROR,
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
} from '../shared/types';

const initialState = {
  data: null,
  isLoading: false,
};

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_FETCH_REQUEST:
      return { isLoading: true, ...state };
    case MOVIE_FETCH_SUCCESS:
    case MOVIE_FETCH_ERROR:
      return { data: action.payload, isLoading: false };
    case MOVIE_CLEAR_ACTION:
      return { data: null, ...state };
    default:
      return state;
  }
}
