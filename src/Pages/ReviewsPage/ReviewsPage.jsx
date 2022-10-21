import { Box } from 'constants/Box';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieRewiews } from 'services/Api';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getMovieRewiews(id);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wrong</p>}
      {reviews.length !== 0 ? (
        <div>
          <ul>
            {reviews.map(({ id, author, content }) => {
              return (
                <Box as="li" mt="8px" key={id}>
                  <h4>Author: {author}</h4>
                  <p>{content}</p>
                </Box>
              );
            })}
          </ul>
        </div>
      ) : (
        <p>No reviews were found for this movie.</p>
      )}
    </div>
  );
}
