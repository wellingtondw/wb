import { renderWithTheme } from "../../utils/tests/helper";
import * as Actions from "../../store/modules/vehicle/actions";

import { Home } from ".";
import { fireEvent, screen } from "@testing-library/react";

const fakeMake = [{ ID: 1, Name: "Chevrolet" }];
const fakeModel = [{ MakeID: 1, ID: 1, Name: "Agile" }];
const fakeVersion = [
  { ModelID: 1, ID: 6, Name: "1.5 DX 16V FLEX 4P AUTOMÁTICO" },
];

jest.mock("react-redux", () => ({
  useSelector: () => ({
    data: {
      make: fakeMake,
      model: fakeModel,
      version: fakeVersion,
    },
    loading: false,
    error: false,
  }),
  useDispatch: () => jest.fn(),
}));

describe("<Home />", () => {
  it("should be able to get make", () => {
    const makeRequest = jest.spyOn(Actions, "makeRequest");
    renderWithTheme(<Home />);

    expect(makeRequest).toHaveBeenCalledTimes(1);
  });

  it("should be able to get models", () => {
    const modelRequest = jest.spyOn(Actions, "modelRequest");
    renderWithTheme(<Home />);

    const makeSelect = screen.getByText(/chevrolet/i).parentElement;

    fireEvent.click(makeSelect!);
    fireEvent.click(screen.getByText(/chevrolet/i));

    expect(modelRequest).toHaveBeenCalledTimes(1);
  });

  it("should be able to get versions", () => {
    const versionRequest = jest.spyOn(Actions, "versionRequest");
    renderWithTheme(<Home />);

    const modelSelect = screen.getByText(/modelo/i).parentElement;

    fireEvent.click(modelSelect!);
    fireEvent.click(screen.getByText(/agile/i));

    expect(versionRequest).toHaveBeenCalledTimes(1);
  });

  it("should be able to select vehicle type", () => {
    renderWithTheme(<Home />);
    const motorcycleButtonElement =
      screen.getByText(/motos/i).parentElement?.parentElement;
    fireEvent.click(motorcycleButtonElement!);

    expect(motorcycleButtonElement).toHaveStyle({
      "border-bottom": "0.4rem solid #C02838",
    });
  });
});
