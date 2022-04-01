import styled, { css, DefaultTheme } from "styled-components";
import { SelectProps } from ".";

type WrapperProps = Pick<SelectProps, "disabled">;

const wrapperModifiers = {
  disabled: () => css`
    > button,
    label,
    &:after {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled }) => css`
    position: relative;
    width: 100%;

    &::after {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      margin-right: ${theme.spacings.xxsmall};

      border-left: 4px solid transparent;
      border-right: 4px solid transparent;

      border-top: 6px solid ${theme.colors.black};
    }

    ${disabled && wrapperModifiers.disabled}
  `}
`;

export const Select = styled.button`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${theme.spacings.xsmall};
    height: ${theme.spacings.large};
    border: 1px solid ${theme.colors.lightGray};
    border-radius: ${theme.border.radius};
    background: transparent;
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.gray};
    text-align: left;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    > span {
      font-weight: bold;
      color: ${theme.colors.black};
    }
  `}
`;

type DropSelectProps = { isOpen: boolean };

export const DropSelect = styled.div<DropSelectProps>`
  ${({ isOpen, theme }) => css`
    display: ${isOpen ? "block" : "none"};
    width: 100%;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 1px;
    border: 1px solid ${theme.colors.lightGray};
    border-bottom-left-radius: ${theme.border.radius};
    border-bottom-right-radius: ${theme.border.radius};
    position: absolute;
    background: ${theme.colors.white};
    z-index: 1;
  `}
`;

type OptionProps = { active: boolean };

const optionModifiers = {
  active: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  `,
};

export const Option = styled.button<OptionProps>`
  ${({ theme, active }) => css`
    display: block;
    width: 100%;
    text-align: left;
    padding: ${theme.spacings.xxsmall};
    border: 0;
    cursor: pointer;
    background: transparent;

    ${active && optionModifiers.active(theme)}
  `}
`;
