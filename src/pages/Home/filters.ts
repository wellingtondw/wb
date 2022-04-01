import { IMake, IModel, IVersion } from "../../store/modules/vehicle/types";

const makeList = (make: IMake[]) =>
  make.map((item) => ({
    label: item.Name,
    value: String(item.ID),
  }));

const modelList = (model: IModel[]) =>
  model.map((item) => ({
    label: item.Name,
    value: String(item.ID),
  }));

const versionList = (version: IVersion[]) =>
  version.map((item) => ({
    label: item.Name,
    value: String(item.ID),
  }));

const years = [
  { value: "2020" },
  { value: "2021" },
  { value: "2022" },
  { value: "2023" },
  { value: "2024" },
  { value: "2025" },
];

const distance = [
  { label: "100km", value: "100" },
  { label: "200km", value: "200" },
  { label: "300km", value: "300" },
  { label: "400km", value: "400" },
  { label: "500km", value: "500" },
];

const priceRange = [
  { label: "10.000", value: "10000" },
  { label: "20.000", value: "20000" },
  { label: "30.000", value: "30000" },
  { label: "40.000", value: "40000" },
  { label: "50.000", value: "50000" },
];

export { makeList, modelList, versionList, years, distance, priceRange };
