import { Box } from 'constants/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieId } from 'services/Api';
import MovieCard from 'components/MovieCard/MovieCard';

export default function MovieInfoPage() {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieId = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieId(id);
        setMovie(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovieId();
  }, [id]);

  return (
    <Box>
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wromg</p>}
      {movie && <MovieCard movie={movie} />}
    </Box>
  );
}
