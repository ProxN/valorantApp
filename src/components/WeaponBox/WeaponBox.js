import React from 'react';
import PropTypes from 'prop-types';
import { WeaponBox as WeaponBoxContainer, WeaponName, WeaponLink } from './styles';

const WeaponBox = ({ weapon, active }) => {
  return (
    <WeaponLink to={`/weapons/${weapon.name}`}>
      <WeaponBoxContainer active={active}>
        <img src={weapon.image} alt={weapon.name} />
        <WeaponName>
          {weapon.name}
          <span>
            Cost:&nbsp;
            {weapon.cost}
          </span>
        </WeaponName>
      </WeaponBoxContainer>
    </WeaponLink>
  );
};

WeaponBox.defaultProps = {
  active: false,
};

WeaponBox.propTypes = {
  weapon: PropTypes.objectOf(PropTypes.string).isRequired,
  active: PropTypes.bool,
};
export default WeaponBox;
