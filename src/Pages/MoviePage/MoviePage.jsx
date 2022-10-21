import React from 'react';
import { useState, useEffect } from 'react';
import { getQueryMovie } from 'services/Api';
// import Title from 'components/Title/Title';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList/MovieList';

export default function MoviePage() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const onQuery = query => {
    setQuery(query);
    setMovies([]);
  };

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getQueryMovie(query);
        setMovies([...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchQuery();
  }, [query]);

  return (
    <div>
      <SearchBar onSubmit={onQuery} />
      {/* <Title text="Are you search: ">{query}</Title> */}
      {loading && <p>Loading ...</p>}
      {Boolean(movies.length) && <MovieList items={movies} />}
      {error && <p>Sorry! Something went wrong</p>}
    </div>
  );
}
