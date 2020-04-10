import React from 'react';
import { AgentsContainer, GridContainer, Heading, GridRow } from './styles';
import AgentList from './components/AgentsList';

const AgentsPage = () => {
  return (
    <AgentsContainer>
      <GridContainer>
        <GridRow>
          <Heading>
            <span>V</span>
            alorant Agents
          </Heading>
          <AgentList />
        </GridRow>
      </GridContainer>
    </AgentsContainer>
  );
};

export default AgentsPage;
