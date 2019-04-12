export const moviesFilterSelector = ({ movies, filters }) => {
  const { filter } = filters.filter;
  return [...movies.data].sort((a, b) => {
    if (a[filter] > b[filter]) {
      return 1;
    }
    if (a[filter] < b[filter]) {
      return -1;
    }
    return 0;
  });
};
