import { Box } from 'constants/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/Api';
import { Img } from './CastPage.styled';

export default function CastPage() {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieCast(id);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <Box>
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wrong</p>}
      {cast && (
        <Box>
          <Box
            as="ul"
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
            gridGap={4}
            mt="8px"
          >
            {cast.map(({ name, id, profile_path, character }) => {
              return (
                <li key={id}>
                  <Img
                    src={
                      profile_path
                        ? `https://image.tmdb.org/t/p/w500${profile_path}`
                        : 'https://www.freeiconspng.com/uploads/no-image-icon-5.png'
                    }
                    alt=""
                  />
                  <div>
                    <h4>{name}</h4>
                    <span>"{character}"</span>
                  </div>
                </li>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
}
