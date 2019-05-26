// flow
import { BASE_URL } from '../../../core/config';
import {
  MOVIES_FETCH_ERROR,
  MOVIES_FETCH_REQUEST,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FILTER,
  MOVIES_SEARCH_BY,
  MOVIES_SEARCH_QUERY,
} from '../../types';
import type { Action } from '../../types';

export const doMoviesRequest = (): Action => ({
  type: MOVIES_FETCH_REQUEST,
});

export const doMoviesFetchSuccess = (payload): Action => ({
  type: MOVIES_FETCH_SUCCESS,
  payload,
});

export const doMoviesFetchError = (payload): Action => ({
  type: MOVIES_FETCH_ERROR,
  payload,
});

export const doMoviesFilter = (payload): Action => ({
  type: MOVIES_FILTER,
  payload,
});

export const doMoviesSearchBy = (payload): Action => ({
  type: MOVIES_SEARCH_BY,
  payload,
});

export const doMoviesSearchQuery = (payload): Action => ({
  type: MOVIES_SEARCH_QUERY,
  payload,
});

export const fetchMovies = () => async (dispatch): void => {
  dispatch(doMoviesRequest());

  try {
    const response = await fetch(`${BASE_URL}movies`);
    const data = await response.json();
    dispatch(doMoviesFetchSuccess(data.data));
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    dispatch(doMoviesFetchError([]));
  }
};
