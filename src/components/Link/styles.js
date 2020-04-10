import styled, { css } from 'styled-components';

export default styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  ${({ theme }) => css`
    color: ${theme.colors.grayish.dark};
    :hover {
      color: ${theme.colors.grayish.mid};
    }
  `};
`;
