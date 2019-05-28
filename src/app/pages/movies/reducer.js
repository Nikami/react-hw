// @flow
import {
  MOVIES_FETCH_ERROR,
  MOVIES_FETCH_REQUEST,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FILTER,
  MOVIES_SEARCH_BY,
  MOVIES_SEARCH_QUERY,
} from '../../redux/types';
import type { Action } from '../../redux/types';
import type { Movie } from '../movie-details/reducer';

type MoviesState = {|
  data: Movie[],
  isLoading: boolean,
|}

type FilterState = {|
  filterBy: string,
  searchBy: string,
  query: string
|}

const moviesInitialState: MoviesState = {
  data: [],
  isLoading: false,
};

export function moviesReducer(
  state: MoviesState = moviesInitialState,
  action: Action,
) {
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

const filtersInitialState: FilterState = {
  filterBy: 'vote_count',
  searchBy: 'title',
  query: '',
};

export function filtersReducer(
  state: FilterState = filtersInitialState,
  action: Action,
) {
  switch (action.type) {
    case MOVIES_FILTER:
      return { ...state, filterBy: action.payload };
    case MOVIES_SEARCH_BY:
      return { ...state, searchBy: action.payload };
    case MOVIES_SEARCH_QUERY:
      return { ...state, query: action.payload };
    default:
      return state;
  }
}

export type { MoviesState, FilterState };
