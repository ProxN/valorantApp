import styled, { css } from 'styled-components';

const SmallInput = css`
  padding: 8px 5px;
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.small};
  `};
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  width: 100%;
  padding: 15px 20px;
  ${({ theme }) => css`
    color: ${theme.colors.grayish.mid};
    font-size: ${theme.fontSizes.regular};
    ::placeholder {
      color: ${theme.colors.grayish.dark};
    }
  `};
`;
export const SearchContainer = styled.div`
  width: ${(props) => (props.small ? '250px' : '500px')};
  background: ${(props) => (props.small ? 'transparent' : '#22293c')};
  border: none;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary.light2};
  display: flex;
  padding: 0 5px;
  ${SearchInput} {
    ${(props) => {
      return props.small && SmallInput;
    }}
  }
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
