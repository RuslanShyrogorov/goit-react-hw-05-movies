import React from 'react';
import { Box } from 'constants/Box';
import {
  CardLink,
  MovieTitle,
  Text,
  Title,
  AdditionalTitle,
  Span,
  CardImg,
} from './MovieCard.styled';
import { Outlet, useLocation, useParams } from 'react-router-dom';

export default function MovieCard({ movie }) {
  const { id } = useParams();

  const location = useLocation();

  const castOnPage = location.pathname.includes('cast');
  const castLink = castOnPage ? `/movies/${id}` : `/movies/${id}/cast`;

  const reviewsOnPage = location.pathname.includes('reviews');
  const reviewsLink = reviewsOnPage ? `/movies/${id}` : `/movies/${id}/reviews`;

  const from = location.state?.from || '/movies';

  const imagePath = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://w7.pngwing.com/pngs/772/172/png-transparent-film-cinema-television-android.png';
  const genres = movie.genres?.map(genre => (
    <Span key={genre.id}>{genre.name} </Span>
  ));
  return (
    <Box as="section" backgroundColor="white" widh="100%" p="8px">
      <CardLink type="button">Go back</CardLink>

      <Box>
        <Box display="flex" mt="8px" mb="8px">
          <CardImg src={imagePath} alt="" />
          <Box p="16px">
            <MovieTitle>{movie.title}</MovieTitle>
            <Title>
              User score: <Span>{Math.round(movie.vote_average * 10)}%</Span>
            </Title>
            <Title>Overview</Title>
            <Text>{movie.overview}</Text>
            <Title>Genres: {genres}</Title>
          </Box>
        </Box>
        <div>
          <AdditionalTitle>Additional information</AdditionalTitle>
          <CardLink state={{ from }} to={castLink}>
            Cast
          </CardLink>
          <CardLink state={{ from }} to={reviewsLink}>
            Reviews
          </CardLink>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}
