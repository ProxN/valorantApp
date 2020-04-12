import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getAgent from '../../util/getAgent';
import Section from '../../components/section';
import {
  AgentHeader,
  AgentImage,
  AgentText,
  AgentImageBox,
  AgentName,
  AgentType,
  AgentCard,
  AgentCardTitle,
  AgentInsightsText,
  AgentContent,
} from './styles';
import Abililites from './components/Abilities';

const AgentPage = () => {
  const [agentData, setAgentData] = useState({});
  const { agent } = useParams();
  useEffect(() => {
    setAgentData(getAgent(agent));
  }, [agent]);
  return (
    <Section>
      <AgentHeader>
        <AgentImageBox>
          <AgentImage src={agentData.image} alt={agentData.name} />
        </AgentImageBox>
        <AgentText>
          <AgentName>
            {agentData.name}
            <span> for Valorant</span>
          </AgentName>
          <AgentType>{agentData.type}</AgentType>
        </AgentText>
      </AgentHeader>
      <AgentCard>
        <AgentCardTitle>Agent insights</AgentCardTitle>
        <AgentInsightsText>
          Agent insights on the way, check back soon!
        </AgentInsightsText>
      </AgentCard>
      <AgentContent>
        <Abililites abilities={agentData.abilities} />
      </AgentContent>
    </Section>
  );
};

export default AgentPage;
