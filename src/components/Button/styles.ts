import { darken } from "polished";
import styled, { css, DefaultTheme } from "styled-components";
import { ButtonProps } from ".";

type WrapperProps = Pick<
  ButtonProps,
  "size" | "variant" | "isUppercase" | "minimal"
>;

const wrapperModifiers = {
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.xsmall} ${theme.spacings.huge};
  `,
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background: ${theme.colors.primary};

    &:hover:not(:disabled) {
      background: ${darken(0.03, theme.colors.primary)};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondary};
    border: 2px solid ${theme.colors.secondary};
    background: transparent;

    &:hover:not(:disabled) {
      color: ${darken(0.05, theme.colors.secondary)};
      border-color: ${darken(0.05, theme.colors.secondary)};
    }
  `,
  minimal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.large};
    color: ${theme.colors.gray};
    font-weight: normal;
    background: transparent;

    &:hover:not(:disabled) {
      color: ${darken(0.05, theme.colors.gray)};
      background: transparent;
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, variant, isUppercase, minimal }) => css`
    border: none;
    cursor: pointer;
    font-weight: ${theme.font.medium};
    text-transform: ${isUppercase ? "uppercase" : "initial"};
    border-radius: ${theme.border.radius};
    transition: ${theme.transition.fast};

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    ${!!size && wrapperModifiers[size](theme)}
    ${!!variant && wrapperModifiers[variant](theme)}
    ${minimal && wrapperModifiers.minimal(theme)}
  `}
`;
