import React from 'react';
import {
  StatsContainer,
  StatsHeading,
  WeaponStats as Stats,
  WeaponStat,
} from './WeaponStats.styles';

const WeaponStats = ({ headline, stats }) => {
  return (
    <StatsContainer>
      <StatsHeading>{headline}</StatsHeading>
      <Stats>
        {stats.map((el) => (
          <WeaponStat>
            <p>{el.text}</p>
            <span>{el.value}</span>
          </WeaponStat>
        ))}
      </Stats>
    </StatsContainer>
  );
};

export default WeaponStats;
