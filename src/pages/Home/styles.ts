import styled, { css } from "styled-components";
import { InputWrapper } from "../../components/SearchInput/styles";

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    max-width: ${theme.grid.container};
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    background: ${theme.colors.white};
    box-shadow: 0px 0px 3px 1px #ddd;
    padding: ${theme.spacings.xlarge};

    @media (max-width: 768px) {
      padding: ${theme.spacings.xsmall};
    }
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    width: 48%;
    margin-bottom: ${theme.spacings.xsmall};

    &:last-child {
      margin-left: ${theme.spacings.xsmall};
    }

    @media (max-width: 768px) {
      width: 100%;

      &:last-child {
        margin-left: 0;
      }
    }
  `}
`;

type RowProps = { fluid?: boolean };

export const Row = styled.div<RowProps>`
  ${({ theme, fluid }) => css`
    display: flex;
    align-items: center;

    > [role="select"] + [role="select"] {
      margin-left: ${theme.spacings.xsmall};
    }

    @media (max-width: 768px) {
      flex-direction: column;

      > [role="select"] + [role="select"] {
        margin-left: 0;
        margin-top: ${theme.spacings.xsmall};
      }

      ${InputWrapper} {
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
  `}
`;

export const VehicleSection = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;

      button {
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
  `}
`;

export const CheckboxWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    > div + div {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`;

export const DistanceWrapper = styled.div`
  width: 200px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: ${theme.spacings.xsmall};

    > button {
      cursor: pointer;
      border: none;
      color: ${theme.colors.primary};
      background: transparent;
      font-weight: ${theme.font.bold};

      span {
        margin-right: ${theme.spacings.xxsmall};
      }
    }

    @media (max-width: 768px) {
      flex-direction: column-reverse;
      text-align: center;

      > div {
        display: flex;
        flex-direction: column-reverse;
      }

      button {
        margin-bottom: ${theme.spacings.xsmall};
      }
    }
  `}
`;
