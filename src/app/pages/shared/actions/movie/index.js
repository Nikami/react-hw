import { BASE_URL } from '../../../../core/config';
import {
  MOVIE_CLEAR_ACTION,
  MOVIE_FETCH_ERROR,
  MOVIE_FETCH_REQUEST,
  MOVIE_FETCH_SUCCESS,
} from '../../types';

export const movieRequestAction = () => ({
  type: MOVIE_FETCH_REQUEST,
});

export const movieFetchSuccessAction = payload => ({
  type: MOVIE_FETCH_SUCCESS,
  payload,
});

export const movieFetchErrorAction = payload => ({
  type: MOVIE_FETCH_ERROR,
  payload,
});

export const movieClearAction = () => ({
  type: MOVIE_CLEAR_ACTION,
});

export const fetchMovie = id => async (dispatch) => {
  dispatch(movieRequestAction());

  try {
    const response = await fetch(`${BASE_URL}movies/${id}`);
    const data = await response.json();
    dispatch(movieFetchSuccessAction(data));
  } catch (e) {
    // eslint-disable-next-line
    console.error(e);
    dispatch(movieFetchErrorAction(null));
  }
};
