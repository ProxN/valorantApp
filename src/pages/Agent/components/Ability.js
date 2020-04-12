import React from 'react';
import PropTypes from 'prop-types';
import {
  AbililtyInfoText,
  AbilityDescription,
  AbililtyContent,
  AgentAbilityInfo,
} from './Ability.styles';

const Abililty = ({ ability }) => {
  return (
    <AgentAbilityInfo>
      <AbililtyContent>
        <AbililtyInfoText>
          <span>Ability name: </span>
          {ability.name}
        </AbililtyInfoText>
        <AbililtyInfoText>
          <span>Cost:</span>
          &nbsp;
          {ability.cost}
        </AbililtyInfoText>
        <AbilityDescription>{ability.description}</AbilityDescription>
      </AbililtyContent>
    </AgentAbilityInfo>
  );
};

Abililty.propTypes = {
  ability: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Abililty;
