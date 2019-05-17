import { BASE_URL } from '../../../core/config';
import {
  MOVIES_FETCH_ERROR,
  MOVIES_FETCH_REQUEST,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FILTER,
  MOVIES_SEARCH_BY,
  MOVIES_SEARCH_QUERY,
} from '../../types';

export const doMoviesRequest = () => ({
  type: MOVIES_FETCH_REQUEST,
});

export const doMoviesFetchSuccess = payload => ({
  type: MOVIES_FETCH_SUCCESS,
  payload,
});

export const doMoviesFetchError = payload => ({
  type: MOVIES_FETCH_ERROR,
  payload,
});

export const doMoviesFilter = payload => ({
  type: MOVIES_FILTER,
  payload,
});

export const doMoviesSearchBy = payload => ({
  type: MOVIES_SEARCH_BY,
  payload,
});

export const doMoviesSearchQuery = payload => ({
  type: MOVIES_SEARCH_QUERY,
  payload,
});

export const fetchMovies = () => async (dispatch) => {
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
