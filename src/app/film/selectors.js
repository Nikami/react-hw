export const moviesByGenreSelector = ({ movies, movie, filters }) => {
  if (movie.data && movie.data.genres && movies.data.length > 0) {
    console.log(movies);
    const genreCompareFn = filters.searchBy === 'genre' && filters.query
      ? g => g.toLowerCase() === filters.query.toLowerCase()
      : g => movie.data.genres.includes(g);

    return movies.data.filter(m => m.id !== movie.data.id && m.genres.some(genreCompareFn));
  } else {
    return [];
  }
};
