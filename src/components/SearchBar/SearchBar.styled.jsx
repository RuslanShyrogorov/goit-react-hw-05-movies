import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: ${p => p.theme.space[4]}px;
  /* padding-bottom: ${p => p.theme.space[3]}px; */
`;

export const Input = styled.input`
  margin-right: ${p => p.theme.space[2]}px;
  border: none;
  border-bottom: 1px solid black;
  width: ${p => p.theme.space[8]}px;
  height: 24px;
  outline: none;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  max-width: ${p => p.theme.space[7]}px;
  color: ${p => p.theme.colors.white};
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.muted};
  border: none;
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 250ms ease-in-out, box-shadow 250ms ease-in-out;

  :hover {
    background-color: ${p => p.theme.colors.accent};
    cursor: pointer;
  }
`;
