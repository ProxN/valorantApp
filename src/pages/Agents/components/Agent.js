import React from 'react';
import PropTypes from 'prop-types';
import { AgentCard, AgentImage, AgentName } from './Agent.styles';

const Agent = ({ agent }) => {
  return (
    <AgentCard>
      <AgentImage src={agent.image} alt={agent.name} />
      <AgentName>
        <p>{agent.name}</p>
      </AgentName>
    </AgentCard>
  );
};

Agent.propTypes = {
  agent: PropTypes.shape({ image: PropTypes.string, name: PropTypes.string })
    .isRequired,
};
export default Agent;
