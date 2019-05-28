// @flow
import type { AppState } from '../../redux/root-reducer';
import type { Movie } from '../movie-details/reducer';

export const moviesFilterSelector = ({ movies, filters }: AppState): Movie[] => {
  const { filterBy } = filters;
  return [...movies.data].sort((a: Movie, b: Movie) => {
    if (a[filterBy] > b[filterBy]) {
      return 1;
    }
    if (a[filterBy] < b[filterBy]) {
      return -1;
    }
    return 0;
  });
};
