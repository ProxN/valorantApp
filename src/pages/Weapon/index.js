import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getListType from '../../util/getWeapon';
import Section from '../../components/section';
import WeaponInfo from './components/WeaponInfo';
import WeaponBox from '../../components/WeaponBox';
import { WeaponContainer, WeaponMenuList } from './styles';

const Weapon = () => {
  const { weapon } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    setData(getListType(weapon));
  }, [weapon]);

  return (
    <Section>
      <WeaponContainer>
        <WeaponMenuList>
          {data.weapons &&
            data.weapons.map((el) => (
              <WeaponBox active={weapon === el.name} weapon={el} />
            ))}
        </WeaponMenuList>
        {data.weapon && <WeaponInfo weapon={data.weapon} />}
      </WeaponContainer>
    </Section>
  );
};
export default Weapon;
