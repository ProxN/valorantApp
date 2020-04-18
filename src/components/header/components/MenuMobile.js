import React from 'react';
import PropTypes from 'prop-types';
import Link from '../../Link';
import { MenuMobileContainer, MenuList } from './MenuMobile.styles';
import { MenuItem } from './Menu.styles';

const MenuMobile = ({ handleToggle }) => {
  return (
    <MenuMobileContainer onClick={handleToggle}>
      <MenuList>
        <MenuItem>
          <Link to="/agents">Agents</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/weapons">Weapons</Link>
        </MenuItem>
      </MenuList>
    </MenuMobileContainer>
  );
};

MenuMobile.propTypes = {
  handleToggle: PropTypes.func.isRequired,
};

export default MenuMobile;
