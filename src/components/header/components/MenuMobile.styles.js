import styled from 'styled-components';
import media from '../../../styles/media';

export const MenuMobileContainer = styled.nav`
  width: 300px;
  position: absolute;
  background: ${({ theme }) => theme.colors.primary.dark2};
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transform: translateY(75%);
  right: 0;
  top: 0;
  ${media.thone`
    width:100%;
  `};
`;

export const MenuList = styled.ul`
  display: flex;
  align-items: start;
  flex-direction: column;
  list-style: none;
  padding: 10px 20px;
`;
