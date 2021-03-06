export const MOVIES_FETCH_REQUEST = 'MOVIES_FETCH_REQUEST';
export const MOVIES_FETCH_SUCCESS = 'MOVIES_FETCH_SUCCESS';
export const MOVIES_FETCH_ERROR = 'MOVIES_FETCH_ERROR';
export const MOVIES_FILTER = 'MOVIES_FILTER';
export const MOVIES_SEARCH_BY = 'MOVIES_SEARCH_BY';
export const MOVIES_SEARCH_QUERY = 'MOVIES_SEARCH_QUERY';

export const MOVIE_FETCH_REQUEST = 'MOVIE_FETCH_REQUEST';
export const MOVIE_FETCH_SUCCESS = 'MOVIE_FETCH_SUCCESS';
export const MOVIE_FETCH_ERROR = 'MOVIE_FETCH_ERROR';
export const MOVIE_CLEAR = 'MOVIE_CLEAR';

type Action = {|
  type: string,
  payload?: any
|}

export type { Action };
