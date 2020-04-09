import styled, { css } from 'styled-components';

export const HeroContainer = styled.section`
  width: 100%;
  height: 50%;
  background-image: linear-gradient(
      to bottom right,
      rgba(34, 41, 60, 0.9),
      rgba(28, 33, 49, 0.8)
    ),
    url('https://i.redd.it/dx7rtr7pfwq41.png');
  background-position: center center;
  position: relative;
`;

export const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CoverContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    transform: translate(-50%, -80%);
    left: 50%;
  }
`;
