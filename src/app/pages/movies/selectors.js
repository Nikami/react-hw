export const moviesFilterSelector = (state) => {
  const { movies, filter } = state;
  return [...movies].sort((a, b) => {
    if (a[filter] > b[filter]) {
      return 1;
    }
    if (a[filter] < b[filter]) {
      return -1;
    }
    return 0;
  });
};
