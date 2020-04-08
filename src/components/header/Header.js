import React from 'react';
import { ReactComponent as Logo } from './logo.svg';
import { HeaderContainer, Navbar, LogoLink, NavLeft } from './styles';
import Menu from './components/Menu';
import Search from './components/Search';

const Header = () => {
  return (
    <HeaderContainer>
      <Navbar>
        <NavLeft>
          <LogoLink>
            <Logo />
            Valorant
          </LogoLink>
          <Menu />
        </NavLeft>
        <Search />
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
