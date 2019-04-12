export const moviesByGenreSelector = ({ movies, movie }) => (
  movie ? movies.data.filter(
    m => m.genres.some(g => movie.data.genres.includes(g)),
  ) : []
);
