import { BASE_URL } from '../../../../core/config';
import {
  MOVIES_FETCH_ERROR,
  MOVIES_FETCH_REQUEST,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FILTER,
  MOVIES_SEARCH,
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

export const doMoviesSearch = payload => ({
  type: MOVIES_SEARCH,
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
