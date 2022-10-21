import { Routes, Route } from 'react-router-dom';
import { Box } from 'constants/Box';
import Layout from './Layout/Layout';
import HomePage from 'Pages/HomePage/HomePage';
import MoviePage from 'Pages/MoviePage/MoviePage';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';
import MovieInfoPage from 'Pages/MovieInfoPage/MovieInfoPage';
import CastPage from 'Pages/CastPage/CastPage';
import ReviewsPage from 'Pages/ReviewsPage/ReviewsPage';

export const App = () => {
  return (
    <Box width="100vw" bg="white">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="movies/:id" element={<MovieInfoPage />}>
            <Route path="cast" element={<CastPage />}></Route>
            <Route path="reviews" element={<ReviewsPage />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Box>
  );
};
