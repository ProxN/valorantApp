import React from 'react';
import { ReactComponent as Logo } from '../../logo.svg';
import Menu from './components/Menu';
import SearchFrom from '../SearchForm';
import { HeaderContainer, Navbar, LogoLink, NavLeft } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <NavLeft>
          <LogoLink to="/">
            <Logo />
            Valorant
          </LogoLink>
          <Menu />
        </NavLeft>
        <SearchFrom small />
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
