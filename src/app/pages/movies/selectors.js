export const moviesFilterSelector = ({ movies, filters }) => {
  const { filter } = filters;
  return [...movies.data].sort((a, b) => {
    if (a[filter.filter] > b[filter]) {
      return 1;
    }
    if (a[filter] < b[filter]) {
      return -1;
    }
    return 0;
  });
};
