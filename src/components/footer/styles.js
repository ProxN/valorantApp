import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  height: ${({ theme }) => theme.footerHeight};
  width: 100%;
  background: #293046;
  display: flex;
  align-items: center;
`;

export const FooterContent = styled.div`
  padding: 0 150px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FooterLinks = styled.div`
  a {
    margin-right: 26px;
  }
`;

export const MadeWith = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayish.dark};
    span {
      color: ${theme.colors.red};
    }
  `};
`;
