import styled, { css } from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
  border-radius: 5px;
  width: 300px;
  padding: 0 5px;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.primary.light2};
  }
  :focus-within {
    border: 1px solid ${({ theme }) => theme.colors.primary.light2};
  }
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding: 8px 5px;
  width: 100%;

  ${({ theme }) => css`
    color: ${theme.colors.grayish.mid};
    font-size: ${theme.fontSizes.small};
    ::placeholder {
      color: ${theme.colors.grayish.dark};
      font-size: ${theme.fontSizes.small};
    }
  `};
`;
export const Button = styled.button`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  outline: none;
  cursor: pointer;

  svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.grayish.dark};
  }
`;
