import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Body } from '../body.svg';
import {
  DamageContainer,
  DamageContent,
  DamageValues,
  DamageValue,
  DamageRange,
  DamageBodyContainer,
} from './DamageStats.styles';
import { StatsHeading } from './WeaponStats.styles';

const DamageStats = ({ damage }) => {
  return (
    <div>
      <StatsHeading>Damage</StatsHeading>
      <DamageContainer>
        {damage.map((el) => (
          <DamageContent>
            <DamageRange>{el.distance}</DamageRange>
            <DamageBodyContainer>
              <Body />
              <DamageValues>
                <DamageValue>{el.head}</DamageValue>
                <DamageValue>{el.body}</DamageValue>
                <DamageValue>{el.leg}</DamageValue>
              </DamageValues>
            </DamageBodyContainer>
          </DamageContent>
        ))}
      </DamageContainer>
    </div>
  );
};

DamageStats.propTypes = {
  damage: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DamageStats;
