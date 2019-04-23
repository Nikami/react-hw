export const moviesFilterSelector = ({ movies, filters }) => {
  const { filterBy } = filters;
  return [...movies.data].sort((a, b) => {
    if (a[filterBy] > b[filterBy]) {
      return 1;
    }
    if (a[filterBy] < b[filterBy]) {
      return -1;
    }
    return 0;
  });
};
