// import { LinkItem, Item } from './MovieList.styled';
import { Box } from 'constants/Box';
import { LinkItem } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

export default function MovieList({ items }) {
  const location = useLocation();
  const moviesList = items.map(({ id, title, name }) => (
    // <Item key={id}>
    <LinkItem key={id} to={`/movies/${id}`} state={{ from: location }}>
      {title || name}
    </LinkItem>
    // </Item>
  ));

  return (
    <Box as="ul" display="flex" flexDirection="column">
      {moviesList}
    </Box>
  );
}
