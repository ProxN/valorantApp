import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AgentAbilitiesList, AgentAbility } from './Abilities.styles';
import Abililty from './Ability';

const Abilities = ({ abilities }) => {
  const [selected, setSelected] = useState(0);
  const keys = ['c', 'q', 'e', 'x'];

  const handleClick = (index) => {
    setSelected(index);
  };
  return (
    <>
      <AgentAbilitiesList>
        {abilities &&
          abilities.map((el, i) => (
            <AgentAbility onClick={() => handleClick(i)} active={selected === i}>
              <img src={el.image} alt={el.name} />
              <span>{keys[i]}</span>
            </AgentAbility>
          ))}
      </AgentAbilitiesList>
      {abilities && <Abililty ability={abilities[selected]} />}
    </>
  );
};

Abilities.propTypes = {
  abilities: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Abilities;
