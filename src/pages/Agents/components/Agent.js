import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AgentCard, AgentImage, AgentName } from './Agent.styles';

const Agent = ({ agent }) => {
  return (
    <Link to={`/agents/${agent.name}`}>
      <AgentCard>
        <AgentImage src={agent.image} alt={agent.name} />
        <AgentName>
          <p>{agent.name}</p>
        </AgentName>
      </AgentCard>
    </Link>
  );
};

Agent.propTypes = {
  agent: PropTypes.shape({ image: PropTypes.string, name: PropTypes.string })
    .isRequired,
};
export default Agent;
