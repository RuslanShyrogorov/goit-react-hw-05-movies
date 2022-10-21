import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const CardLink = styled(NavLink)`
  text-decoration: none;
  margin-bottom: ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  color: ${p => p.theme.colors.black};
  :not(:last-child) {
    margin-right: ${p => p.theme.space[4]}px;
  }
  :hover,
  :focus-visible {
    color: ${p => p.theme.colors.link};
    font-weight: ${p => p.theme.fontWeights.bold};
  }
`;

export const MovieTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const AdditionalTitle = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;
`;
export const Title = styled.h4`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Text = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
export const Span = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
`;

export const CardImg = styled.img`
  max-width: 300px;
`;
