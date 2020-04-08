import styled, { css } from 'styled-components';

export const MenuList = styled.ul`
  list-style: none;
  margin-left: 80px;
  align-items: center;
  display: flex;
`;

export const MenuItem = styled.li`
  cursor: pointer;
  :not(:last-child) {
    margin-right: 26px;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  ${({ theme }) => css`
    color: ${theme.colors.grayish.dark};

    :hover {
      color: ${theme.colors.grayish.mid};
    }
  `};
`;
