import { darken } from "polished";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border: 0.1rem solid ${theme.colors.gray};
    border-radius: 0.2rem;
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;
    &:before {
      content: "";
      width: 0.6rem;
      height: 1rem;
      border: 0.2rem solid ${theme.colors.primary};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }
    &:focus {
      box-shadow: 0 0 0.3rem ${theme.colors.black};
    }
    &:hover {
      border-color: ${darken(0.1, theme.colors.gray)};
      transition: ${theme.transition.fast};
    }
    &:checked {
      &:before {
        opacity: 1;
      }
    }
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors.gray};
    line-height: 1.8rem;
  `}
`;
