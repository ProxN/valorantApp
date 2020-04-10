import styled, { css } from 'styled-components';

export default styled.article`
  height: 100%;
  width: 100%;
`;

export const Wrapper = styled.main`
  ${({ theme }) => css`
    min-height: calc(100% - ${theme.headerHeight} - ${theme.footerHeight});
  `}
`;
