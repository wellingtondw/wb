import styled, { css } from "styled-components";
import { VehicleButtonProps } from ".";

import { Button } from "../Button";

type WrapperProps = Pick<VehicleButtonProps, "active">;

export const Wrapper = styled(Button).attrs({
  minimal: true,
})<WrapperProps>`
  ${({ theme, active }) => css`
    display: flex;
    align-items: flex-end;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    border-radius: 0;
    border-bottom: 0.1rem solid ${theme.colors.lightGray};

    > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-left: ${theme.spacings.xsmall};

      p {
        font-size: ${theme.font.sizes.xxlarge};
        font-weight: ${theme.font.medium};
      }
    }

    ${active &&
    css`
      border-bottom: 0.4rem solid ${theme.colors.primary};

      > span,
      p {
        color: ${theme.colors.primary};
      }
    `}
  `}
`;
