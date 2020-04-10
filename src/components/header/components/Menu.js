import React from 'react';
import Link from '../../Link';
import { MenuList, MenuItem } from './Menu.styles';

const Menu = () => {
  return (
    <MenuList>
      <MenuItem>
        <Link to="/agents">Agents</Link>
      </MenuItem>
      <MenuItem>
        <Link>Weapons</Link>
      </MenuItem>
    </MenuList>
  );
};

export default Menu;
