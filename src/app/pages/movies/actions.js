import { MOVIES_FETCH_ERROR, MOVIES_FETCH_REQUEST, MOVIES_FETCH_SUCCESS } from '../shared/types';
import { BASE_URL } from '../../core/config';

export const moviesRequestAction = () => ({
  type: MOVIES_FETCH_REQUEST,
});

export const moviesFetchSuccess = payload => ({
  type: MOVIES_FETCH_SUCCESS,
  payload,
});

export const moviesFetchError = payload => ({
  type: MOVIES_FETCH_ERROR,
  payload,
});

export const fetchMovies = () => async (dispatch) => {
  dispatch(moviesRequestAction());
  try {
    const response = await fetch(`${BASE_URL}movies`);
    const data = await response.json();
    dispatch(moviesFetchSuccess(data.data));
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    dispatch(moviesFetchError([]));
  }
};
