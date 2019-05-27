import { MOVIE_CLEAR, MOVIE_FETCH_ERROR, MOVIE_FETCH_REQUEST, MOVIE_FETCH_SUCCESS } from '../../redux/types';

const initialState = {
  data: null,
  isLoading: false,
};

export function movieReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIE_FETCH_REQUEST:
      return { ...state, isLoading: true };
    case MOVIE_FETCH_SUCCESS:
    case MOVIE_FETCH_ERROR:
      return { data: action.payload, isLoading: false };
    case MOVIE_CLEAR:
      return { ...state, data: null };
    default:
      return state;
  }
}
