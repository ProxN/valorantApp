import styled from 'styled-components';
import media from '../../styles/media';

export default styled.div`
  display: grid;
  grid-template-columns: 150px repeat(3, 1fr);
  grid-gap: 15px;
  grid-template-areas:
    'sidearms smgs rifles sniper'
    'sidearms shotguns rifles heavies';
  margin-top: 20px;

  ${media.tablet`
    grid-template-areas:
    'sidearms'
    'smgs'
    'rifles'
    'shotguns'
    'sniper'
    'heavies';
    grid-template-columns:1fr;
  `};
  /* grid-template-columns: repeat(auto-fit, minmax(250px, auto)); */
`;
