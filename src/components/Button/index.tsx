import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

export type ButtonProps = {
  size?: "medium" | "large";
  variant?: "primary" | "secondary";
  minimal?: boolean;
  isUppercase?: boolean;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  size = "large",
  variant = "primary",
  minimal = false,
  isUppercase = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Wrapper
      size={size}
      variant={variant}
      isUppercase={isUppercase}
      minimal={minimal}
      {...props}
    >
      {children}
    </S.Wrapper>
  );
};
