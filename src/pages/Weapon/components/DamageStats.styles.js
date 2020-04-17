import styled, { css } from 'styled-components';

export const DamageContainer = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
`;

export const DamageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  :not(:last-child) {
    margin-right: 60px;
  }
`;

export const DamageBodyContainer = styled.div`
  display: flex;
`;

export const DamageRange = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.grayish.dark};
    font-size: ${theme.fontSizes.small};
  `};
`;

export const DamageValues = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin-left: 5px;
  p:first-child {
    color: #fe4451;
  }
  p:nth-child(2) {
    color: #fe828b;
  }
  p:nth-child(3) {
    color: #fec0c5;
  }
`;

export const DamageValue = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
  `};
`;
