import styled, { css } from 'styled-components';

export const WeaponList = styled.div`
  grid-area: ${(props) => props.area};
  :not(:first-child) div {
    height: 120px;
  }
`;

export const WeaponsCategory = styled.div`
  text-align: center;
  border-radius: 4px;
  text-transform: uppercase;
  margin-bottom: 15px;
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
  line-height: 14px;
  padding: 10px 0px;
  font-weight: 600;
  height: 35px !important;
  ${({ theme }) => css`
    background: ${theme.colors.primary.mid2};
    font-size: ${theme.fontSizes.small};
    color: ${theme.colors.grayish.dark};
  `};
`;
