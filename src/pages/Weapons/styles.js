import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 150px repeat(3, 1fr);
  grid-gap: 15px;
  grid-template-areas:
    'sidearms smgs rifles sniper'
    'sidearms shotguns rifles heavies';
`;
