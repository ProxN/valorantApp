import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../logo.svg';
import Menu from './components/Menu';
import SearchFrom from '../SearchForm';
import HamburgerBar from './components/HamburgerBar';
import { HeaderContainer, Navbar, LogoLink, NavLeft } from './styles';
import MenuMobile from './components/MenuMobile';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

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
        <HamburgerBar open={toggle} handleToggle={handleToggle} />
        {toggle && <MenuMobile handleToggle={handleToggle} />}
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
