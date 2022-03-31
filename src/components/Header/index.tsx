import logoImage from "../../assets/images/webmotors.svg";

import * as S from "./styles";

export const Header = () => {
  return (
    <S.Container>
      <S.Logo src={logoImage} />
    </S.Container>
  );
};
