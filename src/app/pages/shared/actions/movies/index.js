import { BASE_URL } from '../../../../core/config';
import {
  MOVIES_FETCH_ERROR,
  MOVIES_FETCH_REQUEST,
  MOVIES_FETCH_SUCCESS,
  MOVIES_FILTER,
  MOVIES_SEARCH,
} from '../../types';

export const moviesRequestAction = () => ({
  type: MOVIES_FETCH_REQUEST,
});

export const moviesFetchSuccessAction = payload => ({
  type: MOVIES_FETCH_SUCCESS,
  payload,
});

export const moviesFetchErrorAction = payload => ({
  type: MOVIES_FETCH_ERROR,
  payload,
});

export const moviesFilterAction = payload => ({
  type: MOVIES_FILTER,
  payload,
});

export const moviesSearchAction = payload => ({
  type: MOVIES_SEARCH,
  payload,
});

export const fetchMovies = () => async (dispatch) => {
  dispatch(moviesRequestAction());

  try {
    const response = await fetch(`${BASE_URL}movies`);
    const data = await response.json();
    dispatch(moviesFetchSuccessAction(data.data));
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    dispatch(moviesFetchErrorAction([]));
  }
};
