import { nanoid } from 'nanoid';
import { Box } from 'constants/Box';
import { NavBtn } from './NavBar.styled';

const navItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'home',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'movies',
  },
];

export default function NavBar() {
  const NavButtons = navItems.map(({ id, to, text }) => (
    // <ul key={id}>
    <NavBtn key={id} to={to} end>
      {text}
    </NavBtn>
    // </ul>
  ));
  return (
    <Box as="nav" display="flex">
      {NavButtons}
    </Box>
  );
}
