import styled from 'styled-components';
import media from '../../../styles/media';

export const AgentAbilitiesList = styled.div`
  width: 120px;

  ${media.tablet`
    width:100%;
    display:flex;
    justify-content:space-between;
  `};
`;

export const AgentAbility = styled.div`
  height: 70px;
  background: rgba(28, 33, 49, 0.5);
  display: flex;
  width: 90px;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: 2px;

  :not(:last-child) {
    margin-bottom: 15px;
  }
  cursor: pointer;
  img {
    max-width: 60px;
    height: 60px;
  }
  span {
    position: absolute;
    padding: 2px 10px;
    background: rgba(28, 33, 49, 0.5);
    right: 0;
    transform: translateX(100%);
    border: 1px solid ${({ theme }) => theme.colors.primary.light};
    border-left: none;
    ${media.tablet`
      bottom:0;
      transform:translateY(100%);
      right:unset;
      
  `};
  }
  &,
  span {
    background: ${(props) => props.active && props.theme.colors.primary.light};
  }
`;
