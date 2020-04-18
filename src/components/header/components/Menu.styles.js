import styled from 'styled-components';
import media from '../../../styles/media';

export const MenuList = styled.ul`
  list-style: none;
  margin-left: 80px;
  align-items: center;
  display: flex;
  ${media.tablet`
    display:none;
  `};
`;

export const MenuItem = styled.li`
  cursor: pointer;
  :not(:last-child) {
    margin-right: 26px;
  }
`;
