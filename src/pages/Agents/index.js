import React from 'react';
import AgentList from './components/AgentsList';
import Section from '../../components/section';

const AgentsPage = () => {
  return (
    <Section headline="Agents">
      <AgentList />
    </Section>
  );
};

export default AgentsPage;
