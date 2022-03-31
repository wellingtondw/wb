import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import "jest-styled-components";

import { Button } from ".";
import { renderWithTheme } from "../../utils/tests/helper";

describe("<Button />", () => {
  it("should render the large size and primary variant by default", () => {
    const { container } = renderWithTheme(<Button>ver ofertas</Button>);

    expect(screen.getByRole("button", { name: /ver ofertas/i })).toHaveStyle({
      padding: "1.6rem 10rem",
      "font-size": "2.0rem",
      color: "#FEFEFE",
      background: "#C02838",
      "text-transform": "initial",
    });

    expect(
      screen.getByRole("button", { name: /ver ofertas/i })
    ).toHaveStyleRule("background", "#b32534", {
      modifier: ":hover:not(:disabled)",
    });

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render the medium size", () => {
    renderWithTheme(<Button size="medium">ver ofertas</Button>);

    expect(screen.getByRole("button", { name: /ver ofertas/i })).toHaveStyle({
      padding: "0.8rem 4.0rem",
      "font-size": "2.0rem",
    });
  });

  it("should render with the secondary variant", () => {
    renderWithTheme(<Button variant="secondary">ver ofertas</Button>);

    expect(screen.getByRole("button", { name: /ver ofertas/i })).toHaveStyle({
      color: "#d0ab76",
      background: "transparent",
      border: "2px solid #d0ab76",
    });

    expect(
      screen.getByRole("button", { name: /ver ofertas/i })
    ).toHaveStyleRule("color", "#c99f63", {
      modifier: ":hover:not(:disabled)",
    });

    expect(
      screen.getByRole("button", { name: /ver ofertas/i })
    ).toHaveStyleRule("border-color", "#c99f63", {
      modifier: ":hover:not(:disabled)",
    });
  });

  it("should render with minimal version", () => {
    renderWithTheme(<Button minimal>ver ofertas</Button>);

    expect(screen.getByRole("button", { name: /ver ofertas/i })).toHaveStyle({
      color: "#777",
      background: "transparent",
      border: "none",
    });

    expect(
      screen.getByRole("button", { name: /ver ofertas/i })
    ).toHaveStyleRule("color", "#6a6a6a", {
      modifier: ":hover:not(:disabled)",
    });
  });

  it("should render with uppercase text", () => {
    renderWithTheme(<Button isUppercase>ver ofertas</Button>);

    expect(screen.getByRole("button", { name: /ver ofertas/i })).toHaveStyle({
      "text-transform": "uppercase",
    });
  });

  it("should receive button props", () => {
    const mockFn = jest.fn();
    renderWithTheme(<Button onClick={mockFn}>ver ofertas</Button>);

    const buttonElement = screen.getByRole("button", { name: /ver ofertas/i });
    userEvent.click(buttonElement);

    expect(mockFn).toBeCalledTimes(1);
  });
});
