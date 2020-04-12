import data from '../data/agents';

export default (agentName) => data.find((el) => el.name === agentName);
