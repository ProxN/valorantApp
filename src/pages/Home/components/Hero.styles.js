import styled from 'styled-components';

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
  padding-top: 80px;
  align-items: center;
  flex-direction: column;
`;

export const CoverContainer = styled.div`
  position: relative;
  svg {
    position: absolute;
    transform: translate(-50%, -80%);
    left: 50%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  align-items: center;
  svg {
    height: 50px;
    width: 50px;
  }
`;
export const LogoName = styled.h4`
  font-weight: 500;
  font-size: 26px;
  color: ${({ theme }) => theme.colors.grayish.mid};
  span {
    color: ${({ theme }) => theme.colors.red};
    font-weight: 700;
  }
`;
