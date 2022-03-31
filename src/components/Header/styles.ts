import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall} 0;

    @media (max-width: 768px) {
      text-align: center;
    }
  `}
`;

export const Logo = styled.img`
  height: 29px;
`;
