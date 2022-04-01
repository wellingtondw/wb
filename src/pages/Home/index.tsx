import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button";
import { Checkbox } from "../../components/Checkbox";
import { Header } from "../../components/Header";
import { SearchInput } from "../../components/SearchInput";
import { Select } from "../../components/Select";
import { VehicleButton } from "../../components/VehicleButton";
import { IState } from "../../store";
import {
  makeRequest,
  modelRequest,
  versionRequest,
} from "../../store/modules/vehicle/actions";
import { IVehicleState } from "../../store/modules/vehicle/types";

import {
  distance,
  makeList,
  modelList,
  priceRange,
  versionList,
  years,
} from "./filters";

import * as S from "./styles";

type VehicleTypeProps = "car" | "motorcycle";

type FilterOptionsProps = {
  makeId: string;
  modelId: string;
  versionId: string;
};

export const Home = () => {
  const dispatch = useDispatch();
  const {
    data: { make, model, version },
    error,
  } = useSelector<IState, IVehicleState>((state) => state.vehicle);
  const [vehicleType, setVehicleType] = useState<VehicleTypeProps>("car");
  const [filterOptions, setFilterOptions] = useState<FilterOptionsProps>({
    makeId: "",
    modelId: "",
    versionId: "",
  });

  useEffect(() => {
    dispatch(makeRequest());
  }, [dispatch]);

  const handleFilterOptions = (label: string, value: string) => {
    setFilterOptions({ ...filterOptions, [label]: value });

    if (label === "makeId") {
      return dispatch(modelRequest(value));
    }

    if (label === "modelId") {
      return dispatch(versionRequest(value));
    }
  };

  return (
    <S.Container>
      <Header />
      <S.VehicleSection>
        <div>
          <VehicleButton
            active={vehicleType === "car"}
            onClick={() => setVehicleType("car")}
          />
          <VehicleButton
            vehicleType="motorcycle"
            active={vehicleType === "motorcycle"}
            onClick={() => setVehicleType("motorcycle")}
          />
        </div>
        <Button variant="secondary" size="medium">
          Vender meu carro
        </Button>
      </S.VehicleSection>

      <S.Wrapper>
        {error && <p>Ocorreu um erro ao realizar a busca, tente novamente.</p>}

        <S.Grid>
          <S.CheckboxWrapper>
            <Checkbox label="novos" labelFor="new" />
            <Checkbox label="usados" labelFor="used" />
          </S.CheckboxWrapper>
        </S.Grid>

        <S.Row>
          <S.Grid>
            <S.Row>
              <SearchInput label="Onde:" icon="location" />
              <S.DistanceWrapper>
                <Select
                  label="Raio"
                  options={distance}
                  onChange={(value) => console.log(value)}
                />
              </S.DistanceWrapper>
            </S.Row>
          </S.Grid>

          <S.Grid>
            <S.Row>
              <Select
                label="Marca"
                options={makeList(make)}
                onChange={(value) => handleFilterOptions("makeId", value)}
                disabled={make.length < 1}
              />
              <Select
                label="Modelo"
                options={modelList(model)}
                onChange={(value) => handleFilterOptions("modelId", value)}
                disabled={model.length < 1}
              />
            </S.Row>
          </S.Grid>
        </S.Row>

        <S.Row>
          <S.Grid>
            <S.Row>
              <Select
                label="Ano Desejado"
                options={years}
                onChange={(value) => console.log(value)}
              />

              <Select
                label="Faixa de Preço"
                options={priceRange}
                onChange={(value) => console.log(value)}
              />
            </S.Row>
          </S.Grid>

          <S.Grid>
            <S.Row fluid>
              <Select
                label="Versão"
                options={versionList(version)}
                onChange={(value) => handleFilterOptions("versionId", value)}
                disabled={version.length < 1}
              />
            </S.Row>
          </S.Grid>
        </S.Row>

        <S.Footer>
          <button>
            <span>&gt;</span>Busca Avançada
          </button>

          <div>
            <Button minimal>Limpar filtros</Button>
            <Button isUppercase>Ver ofertas</Button>
          </div>
        </S.Footer>
      </S.Wrapper>
    </S.Container>
  );
};
