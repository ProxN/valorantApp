import styled from 'styled-components';
import media from '../../styles/media';

export const WeaponContainer = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 25px;
  ${media.tablet`
  grid-template-columns: 1fr;
  `};
`;
export const WeaponMenuList = styled.div`
  display: flex;
  flex-direction: column;
  ${media.tablet`
    flex-direction:row;
  a:not(:last-child) {
    margin-right: 15px;
  }
  `};
`;
