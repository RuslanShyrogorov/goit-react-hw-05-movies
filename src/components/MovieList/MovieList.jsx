// import { LinkItem, Item } from './MovieList.styled';
import { Box } from 'constants/Box';
import { LinkItem } from './MovieList.styled';

export default function MovieList({ items }) {
  const moviesList = items.map(({ id, title, name }) => (
    // <Item key={id}>
    <LinkItem key={id} to={`/movies/${id}`}>
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
