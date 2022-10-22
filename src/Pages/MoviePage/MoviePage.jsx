import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getQueryMovie } from 'services/Api';
// import Title from 'components/Title/Title';
import SearchBar from 'components/SearchBar/SearchBar';
import MovieList from 'components/MovieList/MovieList';

export default function MoviePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameFilm = searchParams.get('name_film') ?? '';
  console.log(movies);

  const onQuery = query => {
    setMovies([]);
    setSearchParams({ name_film: query });
  };

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getQueryMovie(nameFilm);
        setMovies([...data.results]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (nameFilm) fetchQuery();
  }, [nameFilm]);

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
