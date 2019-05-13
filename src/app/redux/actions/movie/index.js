import { BASE_URL } from '../../../core/config';
import {
  MOVIE_CLEAR,
  MOVIE_FETCH_ERROR,
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
} from '../../types';

export const doMovieRequest = () => ({
  type: MOVIE_FETCH_REQUEST,
});

export const doMovieFetchSuccess = payload => ({
  type: MOVIE_FETCH_SUCCESS,
  payload,
});

export const doMovieFetchError = payload => ({
  type: MOVIE_FETCH_ERROR,
  payload,
});

export const doMovieClear = () => ({
  type: MOVIE_CLEAR,
});

export const fetchMovie = id => async (dispatch) => {
  dispatch(doMovieRequest());

  try {
    const response = await fetch(`${BASE_URL}movies/${id}`);
    const data = await response.json();
    dispatch(doMovieFetchSuccess(data));
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    dispatch(doMovieFetchError(null));
  }
};
