import styled, { css } from 'styled-components';

export const SectionContainer = styled.section`
  padding: 50px 0;
  width: 100%;
`;
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const GridRow = styled.div`
  grid-column: ${(props) => (props.width ? '3/ 11' : '4/ 10')};
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
