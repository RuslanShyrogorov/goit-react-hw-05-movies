import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LinkItem = styled(NavLink)`
  text-decoration: none;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.link};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

// export const Item = styled.li`
//   list-style: none;
// `;
