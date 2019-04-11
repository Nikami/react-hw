export const moviesByGenreSelector = (state) => {
  const { movies, movie } = state;
  return movie
    ? movies.filter(m => m.genres.some(g => movie.genres.includes(g)))
    : [];
};
