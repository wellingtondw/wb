import { useState, InputHTMLAttributes, useRef } from "react";
import { Icon } from "../Icon";

import * as S from "./styles";

export type SearchInputProps = {
  onInputChange?: (value: string) => void;
  icon: string;
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const SearchInput = ({
  label,
  icon,
  onInputChange,
  ...props
}: SearchInputProps) => {
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInputChange && onInputChange(newValue);
  };

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  const handleClearInput = () => {
    setValue("");
    handleInputFocus();
  };

  return (
    <S.InputWrapper>
      <S.IconWrapper onClick={handleInputFocus}>
        <Icon icon={icon} size={26} />
        <p>{label}</p>
      </S.IconWrapper>
      <S.Input
        type="text"
        onChange={onChange}
        value={value}
        ref={inputRef}
        {...props}
      />
      <S.Close onClick={handleClearInput}>
        <Icon icon="close" size={16} />
      </S.Close>
    </S.InputWrapper>
  );
};
