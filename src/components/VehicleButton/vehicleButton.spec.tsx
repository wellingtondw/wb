import { renderWithTheme } from "../../utils/tests/helper";

import { VehicleButton } from ".";
import { fireEvent, screen } from "@testing-library/react";

describe("<VehicleButton />", () => {
  it("should be able to render correctly", () => {
    const { container } = renderWithTheme(<VehicleButton />);

    expect(screen.getByText(/carros/i)).toBeInTheDocument();
    expect(screen.getByRole("button").firstChild).toHaveClass("icon-car");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should be able with motorcycle type", () => {
    renderWithTheme(<VehicleButton vehicleType="motorcycle" />);

    expect(screen.getByText(/motos/i)).toBeInTheDocument();
    expect(screen.getByRole("button").firstChild).toHaveClass(
      "icon-motorcycle"
    );
  });

  it("should be able to render with active status", () => {
    renderWithTheme(<VehicleButton active />);

    expect(screen.getByRole("button")).toHaveStyle({
      "border-bottom": "0.4rem solid #C02838",
    });

    expect(screen.getByText(/carros/i)).toHaveStyle({
      color: "#C02838",
    });
  });
});
