import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  height: ${({ theme }) => theme.headerHeight};
  background: ${({ theme }) => theme.colors.primary.dark};
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1);
`;

export const Navbar = styled.nav`
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.grayish.mid};
  svg {
    margin-right: 5px;
  }
`;

export const NavLeft = styled.div`
  display: flex;
`;
