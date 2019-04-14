import {
  MOVIES_FETCH_ERROR,
  MOVIES_FETCH_REQUEST,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FILTER,
  MOVIES_SEARCH,
} from '../shared/types';

const moviesInitialState = {
  data: [],
  isLoading: false,
};

export function moviesReducer(state = moviesInitialState, action) {
  switch (action.type) {
    case MOVIES_FETCH_REQUEST:
      return { ...state, isLoading: true };
    case MOVIES_FETCH_SUCCESS:
    case MOVIES_FETCH_ERROR:
      return { data: action.payload, isLoading: false };
    default:
      return state;
  }
}

const filtersInitialState = {
  filter: 'vote_count',
  search: 'title',
};
export function filtersReducer(state = filtersInitialState, action) {
  switch (action.type) {
    case MOVIES_FILTER:
      return { ...state, filter: action.payload };
    case MOVIES_SEARCH:
      return { ...state, search: action.payload };
    default:
      return state;
  }
}
