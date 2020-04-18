import styled, { css } from 'styled-components';
import media from '../../../styles/media';

export const AgentAbilityInfo = styled.div`
  background: rgba(28, 33, 49, 0.5);
  margin-left: 50px;
  width: 100%;
  border-radius: 4px;
  height: max-content;
  ${media.tablet`
    margin-left:0;
    margin-top:40px;
  `};
`;

export const VideoContainer = styled.div`
  width: 400px;
`;

export const VideoBox = styled.video`
  max-width: 100%;
  height: auto;
`;

export const AbililtyContent = styled.div`
  padding: 20px 10px;
`;

export const AbililtyInfoText = styled.p`
  font-weight: 600;
  text-transform: capitalize;
  ${({ theme }) => css`
    color: ${theme.colors.grayish.mid};
    font-size: ${theme.fontSizes.small};
    span {
      color: ${theme.colors.grayish.dark};
      font-weight: normal;
    }
  `}
  margin-bottom:5px;
`;

export const AbilityDescription = styled(AbililtyInfoText)`
  font-weight: normal;
`;
