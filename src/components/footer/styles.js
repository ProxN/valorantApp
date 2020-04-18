import styled, { css } from 'styled-components';
import media from '../../styles/media';

export const FooterContainer = styled.footer`
  height: ${({ theme }) => theme.footerHeight};
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.mid2};
  display: flex;
  align-items: center;
`;

export const FooterContent = styled.div`
  padding: 0 150px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${media.tablet`
    padding:0 50px;
  `};
  ${media.phone`
    padding:0 20px;
  `};
`;

export const FooterLinks = styled.div`
  a {
    margin-right: 26px;
  }
  ${media.tablet`
    font-size:${({ theme }) => theme.fontSizes.small};
  `};
`;

export const MadeWith = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.grayish.dark};
    ${media.tablet`
    font-size:${theme.fontSizes.small};
  `};
    span {
      color: ${theme.colors.red};
    }
  `};
`;
