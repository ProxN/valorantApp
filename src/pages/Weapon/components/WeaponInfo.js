import React from 'react';
import PropTypes from 'prop-types';
import {
  WeaponContent,
  WeaponStatsContainer,
  WeaponBox,
  WeaponName,
} from './WeaponInfo.styles';
import WeaponStats from './WeaponStats';
import DamageStats from './DamageStats';

const WeaponInfo = ({ weapon }) => {
  const { stats, name, cost, image } = weapon;
  // eslint-disable-next-line camelcase
  const { magazine, wall_penetration, primary, alternate, damage } = stats;

  return (
    <WeaponContent>
      <WeaponStatsContainer>
        <WeaponStats
          headline="Weapon Stats"
          stats={[
            {
              text: 'Magazine',
              value: magazine,
            },
            {
              text: 'Wall Penetration',
              value: wall_penetration,
            },
          ]}
        />
      </WeaponStatsContainer>
      <WeaponBox>
        <img src={image} alt={name} />
        <WeaponName>
          {name}
          <span>{cost}</span>
        </WeaponName>
      </WeaponBox>
      <WeaponStatsContainer span>
        <WeaponStats
          headline="Primary Fire"
          stats={[
            {
              text: 'Mode',
              value: primary.mode,
            },
            {
              text: 'Fire Rate',
              value: primary.fire_rate,
            },
          ]}
        />
        {alternate && (
          <WeaponStats
            headline="Alt. Fire"
            stats={[
              {
                text: 'Mode',
                value: alternate.mode,
              },
              {
                text: 'Fire Rate',
                value: alternate.fire_rate,
              },
            ]}
          />
        )}

        <DamageStats damage={damage} />
      </WeaponStatsContainer>
    </WeaponContent>
  );
};

WeaponInfo.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  weapon: PropTypes.object.isRequired,
};

export default WeaponInfo;
