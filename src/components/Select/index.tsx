import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "../../utils/outsideClick";

import * as S from "./styles";

export type SelectProps = {
  onChange: (value: string) => void;
  handleValue?: () => void;
  label?: string;
  disabled?: boolean;
  options: {
    label?: string;
    value: string;
  }[];
};

export const Select = ({
  options,
  label,
  onChange,
  handleValue,
  disabled,
  ...props
}: SelectProps) => {
  const selectRef = useRef(null);
  const [value, setValue] = useState("");
  const [optionLabel, setOptionLabel] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (disabled) {
      setValue("");
    }
  }, [disabled]);

  const handleOpen = () => {
    if (disabled) return;

    setIsOpen(!isOpen);
  };

  const handleClickOption = (value: string, optionLabel?: string) => {
    optionLabel && setOptionLabel(optionLabel);
    setValue(value);
    setIsOpen(false);
    onChange(value);
  };

  useClickOutside({ ref: selectRef, callback: () => setIsOpen(false) });
  return (
    <S.Wrapper ref={selectRef} disabled={disabled} role="select">
      <S.Select {...props} onClick={handleOpen}>
        {!!label && (
          <S.Label>
            {!value ? (
              label
            ) : (
              <>
                {label}: <span>{optionLabel || value}</span>
              </>
            )}
          </S.Label>
        )}
      </S.Select>

      <S.DropSelect data-testid="drop" isOpen={isOpen} aria-hidden={!isOpen}>
        <>
          {options.map(({ label, value: optionValue }, index) => {
            const isActive = value === optionValue;

            return (
              <S.Option
                active={isActive}
                onClick={() => handleClickOption(optionValue, label)}
                key={index}
              >
                {label || optionValue}
              </S.Option>
            );
          })}
        </>
      </S.DropSelect>
    </S.Wrapper>
  );
};
