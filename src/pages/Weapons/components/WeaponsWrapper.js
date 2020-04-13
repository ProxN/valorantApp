import React from 'react';
import PropTypes from 'prop-types';
import {
  WeaponList,
  WeaponBox,
  WeaponName,
  WeaponsCategory,
} from './WeaponsWrapper.styles';

const WeaponsWrapper = ({ category, data }) => {
  return (
    <WeaponList area={category}>
      <WeaponsCategory>{category}</WeaponsCategory>
      {data.map((el) => (
        <WeaponBox>
          <img src={el.image} alt={el.name} />
          <WeaponName>
            {el.name}
            <span>
              Cost:&nbsp;
              {el.cost}
            </span>
          </WeaponName>
        </WeaponBox>
      ))}
    </WeaponList>
  );
};

WeaponsWrapper.propTypes = {
  category: PropTypes.string.isRequired,
};

export default WeaponsWrapper;
