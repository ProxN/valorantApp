import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    *::after{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }

    html{
        box-sizing:border-box;
        height:100%;
        width:100%;
    }
    #root,
    body{
        width:100%;
        height:100%;
    }
    body{
        line-height:normal;
        font-weight:normal;
        ${({ theme }) => css`
          background-color: ${theme.colors.primary.light};
          font-size: ${theme.fontSizes.regular};
          color: ${theme.colors.gray.light};
          font-family: ${theme.fonts.primary};
        `};
    }
`;
