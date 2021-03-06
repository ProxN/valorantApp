import styled, { css } from 'styled-components';
import media from '../../../styles/media';

export const AgentCard = styled.div`
  background: rgba(28, 33, 49, 0.5);
  position: relative;
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: center;
`;

export const AgentImage = styled.img`
  max-width: 100%;
  height: auto;
  ${media.desktop`
    max-width:80%;
  `};
`;

export const AgentName = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  text-transform: capitalize;
  text-align: center;
  background: rgba(28, 33, 49, 0.9);
  padding: 5px 10px;
  border-top: 1px solid ${({ theme }) => theme.colors.primary.light};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    line-height: 14px;
    font-weight: 500;
    ${({ theme }) => css`
      color: ${theme.colors.grayish.light};
      font-size: ${theme.fontSizes.large};
    `};
  }
`;
