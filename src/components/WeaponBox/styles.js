import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const WeaponLink = styled(Link)`
  display: block;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const WeaponBox = styled.div`
  height: 105px;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  position: relative;
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
  background: ${(props) => props.active && 'rgba(28,33,49,0.5)'};
`;

export const WeaponName = styled.p`
  position: absolute;
  text-transform: capitalize;
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
