import { ButtonHTMLAttributes } from "react";
import { Icon } from "../Icon";

import * as S from "./styles";

export type VehicleButtonProps = {
  vehicleType?: "car" | "motorcycle";
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const VehicleButton = ({
  vehicleType = "car",
  active = false,
  ...props
}: VehicleButtonProps) => {
  const isCar = vehicleType === "car";

  return (
    <S.Wrapper {...props} active={active}>
      <Icon icon={vehicleType} />
      <div>
        <span>Comprar</span>
        <p>{isCar ? "Carros" : "Motos"}</p>
      </div>
    </S.Wrapper>
  );
};
