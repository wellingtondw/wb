import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    height: ${theme.spacings.large};

    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xxsmall};
    border: 0.1rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.2rem ${theme.colors.black};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;
    height: ${theme.spacings.large};
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall};
    background: transparent;
    border: 0;
    outline: none;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`;

export const IconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.gray};
    margin-right: ${theme.spacings.xxsmall};

    > span {
      color: ${theme.colors.primary};
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`;

export const Close = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.lightGray};
    border: 0;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color: #fff;
  `}
`;
