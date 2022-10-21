import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBtn = styled(NavLink)`
  display: flex;
  text-decoration: none;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-left: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.m};
  border-radius: ${p => p.theme.radii.normal};
  &.active {
    background-color: ${p => p.theme.colors.link};
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: ${p => p.theme.colors.link};
  }
`;
