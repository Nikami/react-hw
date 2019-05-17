export const moviesByGenreSelector = ({ movies, movie, filters }) => {
  const genreCompareFn = filters.searchBy === 'genre' && filters.query
    ? g => g.toLowerCase() === filters.query.toLowerCase()
    : g => movie.data.genres.includes(g);

  return movie.data && movies.data.length > 0
    ? movies.data.filter(m => m.id !== movie.data.id
      && m.genres.some(genreCompareFn)) : [];
};
