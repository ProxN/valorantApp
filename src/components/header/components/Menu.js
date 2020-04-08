import React from 'react';
import { MenuList, MenuItem, MenuLink } from './Menu.styles';

const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <MenuLink>Agents</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink>Weapons</MenuLink>
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
