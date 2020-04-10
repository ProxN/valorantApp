import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export default styled(Link)`
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
