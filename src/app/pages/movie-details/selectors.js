// @flow
import type { AppState } from '../../redux/root-reducer';
import type { Movie } from './reducer';

export const moviesByGenreSelector = (
  { movies, movie, filters }: AppState,
): Movie[] => {
  const genreCompareFn = filters.searchBy === 'genre' && filters.query
    ? g => g.toLowerCase() === filters.query.toLowerCase()
    : g => movie.data.genres.includes(g);

  return movie.data && movies.data.length > 0
    ? movies.data.filter(m => m.id !== movie.data.id
      && m.genres.some(genreCompareFn)) : [];
};
