import styled, { css } from 'styled-components';

export const WeaponContent = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 125px 1fr;
  grid-column-gap: 20px;
`;

export const WeaponStatsContainer = styled.div`
  background: rgba(28, 33, 49, 0.5);
  grid-column: ${(props) => props.span && 'span 2'};
  height: max-content;
`;

export const WeaponBox = styled.div`
  background: rgba(28, 33, 49, 0.5);
  position: relative;
  padding: 25px;
  margin-bottom: 15px;
  grid-column: 2/-1;
  border-radius: 4px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

export const WeaponName = styled.p`
  position: absolute;
  bottom: 12px;
  left: 10px;
  line-height: 14px;
  text-transform: capitalize;
  font-weight: 600;

  ${({ theme }) => css`
    color: ${theme.colors.grayish.mid};

    font-size: ${theme.fontSizes.small};
    span {
      color: ${theme.colors.grayish.dark};
      display: block;
      margin-top: 5px;
      font-weight: normal;
    }
  `};
`;

export const WeaponInfo = styled.div`
  background: rgba(28, 33, 49, 0.5);
`;
