import React from 'react';
import PropTypes from 'prop-types';
import { WeaponList, WeaponsCategory } from './WeaponsWrapper.styles';
import WeaponBox from '../../../components/WeaponBox';

const WeaponsWrapper = ({ category, data }) => {
  return (
    <WeaponList area={category}>
      <WeaponsCategory>{category}</WeaponsCategory>
      {data.map((el) => (
        <WeaponBox weapon={el} />
      ))}
    </WeaponList>
  );
};

WeaponsWrapper.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WeaponsWrapper;
