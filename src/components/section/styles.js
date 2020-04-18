import styled, { css } from 'styled-components';
import media from '../../styles/media';

export const SectionContainer = styled.section`
  padding: 50px 0;
  width: 100%;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const GridRow = styled.div`
  grid-column: ${(props) => (props.width ? '2/ 12' : '3/ 11')};
  ${media.bigDesktop`
    grid-column: 2/ 12;
  `};
  ${media.desktop`
    grid-column: 1/ -1;
    margin:0 20px;
  `};
`;

export const Heading = styled.h1`
  display: inline-block;
  ${({ theme }) => css`
    color: ${theme.colors.grayish.mid};
    font-size: ${theme.fontSizes.large};
    span {
      color: ${theme.colors.red};
      font-weight: 700;
    }
  `};
`;
