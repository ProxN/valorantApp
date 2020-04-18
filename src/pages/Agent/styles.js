import styled, { css } from 'styled-components';
import media from '../../styles/media';

export const AgentHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const AgentImageBox = styled.div`
  width: 80px;
  position: relative;
  height: 80px;
  padding: 10px;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: 4px;
`;

export const AgentImage = styled.img`
  max-width: 200%;
  height: auto;
  position: absolute;
  left: -50%;
`;

export const AgentText = styled.div`
  margin-left: 15px;
`;

export const AgentName = styled.p`
  line-height: 20px;
  text-transform: capitalize;
  ${({ theme }) => css`
    color: ${theme.colors.grayish.dark};
    font-size: ${theme.fontSizes.large};
    font-family: ${theme.fonts.secondary};
    span {
      font-size: ${theme.fontSizes.medium};
      color: ${theme.colors.grayish.mid};
    }
  `};
`;
export const AgentType = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grayish.dark};
  `};
`;

export const AgentCard = styled.div`
  background: rgba(28, 33, 49, 0.5);
  margin-top: 20px;
  border-radius: 5px;
`;

export const AgentCardTitle = styled.div`
  font-weight: 500;
  padding: 10px 15px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  ${({ theme }) => css`
    color: ${theme.colors.grayish.mid};
    font-size: ${theme.fontSizes.small};
    background: ${theme.colors.primary.mid2};
  `};
`;
export const AgentInsightsText = styled.p`
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.grayish.mid};
`;

export const AgentContent = styled.div`
  margin-top: 15px;
  display: flex;
  ${media.tablet`
    flex-direction:column;
  `};
`;
