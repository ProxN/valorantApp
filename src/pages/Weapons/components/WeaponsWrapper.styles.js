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

export const WeaponBox = styled.div`
  height: 105px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  position: relative;
  :not(:last-child) {
    margin-bottom: 10px;
  }
  transition: border 0.2s ease-in-out;
  img {
    max-width: 70%;
    height: auto;
  }
  ${({ theme }) => css`
    background: ${theme.colors.primary.mid2};
    color: ${theme.colors.grayish.dark};
    border: 1px solid ${theme.colors.primary.light};
    :hover {
      border: 3px solid ${theme.colors.primary.light};
    }
  `};
`;
export const WeaponName = styled.p`
  position: absolute;
  bottom: 12px;
  left: 10px;
  line-height: 14px;
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
