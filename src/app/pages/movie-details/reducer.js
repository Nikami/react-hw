// @flow
import {
  MOVIE_CLEAR,
  MOVIE_FETCH_ERROR,
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
} from '../../redux/types';
import type { Action } from '../../redux/types';

type Movie = {|
  id: number,
  title: string,
  tagline: string,
  vote_average: number,
  vote_count: number,
  release_date: string,
  poster_path: string,
  overview: string,
  budget: number,
  revenue: number,
  runtime: number,
  genres: string[]
|}

type MovieState = {|
  data: Movie | null,
  isLoading: boolean
|}

const initialState: MovieState = {
  data: null,
  isLoading: false,
};

export function movieReducer(state: MovieState = initialState, action: Action) {
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

export type { Movie, MovieState };
