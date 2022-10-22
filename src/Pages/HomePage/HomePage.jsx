import { useState, useEffect } from 'react';
import { getTrendMovie } from 'services/Api';
import { Box } from 'constants/Box';
import Title from 'components/Title/Title';
import MovieList from 'components/MovieList/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTrendMovie();
        setMovies([...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  return (
    <Box as="div">
      <Title text="Trending day movies" />
      {loading && <p>Loading ...</p>}
      {Boolean(movies.length) && <MovieList items={movies} />}
      {error && <p>Sorry! Something went wrong</p>}
    </Box>
  );
}
