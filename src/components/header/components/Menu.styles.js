import styled from 'styled-components';

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
