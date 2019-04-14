export const moviesByGenreSelector = ({ movies, movie }) => (
  (movie.data && movies.data.length > 0)
    ? movies.data.filter(m => m.id !== movie.data.id
      && m.genres.some(g => movie.data.genres.includes(g))) : []
);
