import styled, { css } from 'styled-components';

export const StatsContainer = styled.div``;

export const StatsHeading = styled.div`
  font-weight: 500;
  padding: 3px 15px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  ${({ theme }) => css`
    color: ${theme.colors.grayish.mid};
    font-size: ${theme.fontSizes.small};
    background: ${theme.colors.primary.mid2};
  `};
`;

export const WeaponStats = styled.div`
  padding: 15px;
`;

export const WeaponStat = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 5px;
  ${({ theme }) => css`
    color: ${theme.colors.grayish.dark};
    font-size: ${theme.fontSizes.small};
    span {
      color: ${theme.colors.grayish.mid};
    }
  `};
`;
