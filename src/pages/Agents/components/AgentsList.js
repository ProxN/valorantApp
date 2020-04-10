import React from 'react';
import AgentsListContainer from './AgentsList.styles';
import agents from '../../../data/agents';
import Agent from './Agent';

const AgentList = () => {
  return (
    <AgentsListContainer>
      {agents.map((agent) => (
        <Agent key={agent.name} agent={agent} />
      ))}
    </AgentsListContainer>
  );
};

export default AgentList;
