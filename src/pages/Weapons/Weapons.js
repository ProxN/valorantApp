import React from 'react';
import Section from '../../components/section';
import WeaponsList from './styles';
import SideArmWeapons from './components/WeaponsWrapper';
import weapons from '../../data/weapons';

const Weapons = () => {
  return (
    <Section width="medium">
      <WeaponsList>
        {/* <SideArmWeapons category="Sidearm" />
        <SideArmWeapons category="SMGs" /> */}
        {Object.keys(weapons).map((el) => (
          <SideArmWeapons data={weapons[el]} category={el} />
        ))}
      </WeaponsList>
    </Section>
  );
};

export default Weapons;
