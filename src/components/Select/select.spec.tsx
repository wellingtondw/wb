import { renderWithTheme } from "../../utils/tests/helper";

import { Select } from ".";
import { fireEvent, screen } from "@testing-library/react";

const options = [
  { label: "100km", value: "100" },
  { label: "200km", value: "200" },
  { label: "300km", value: "300" },
];

describe("<Select />", () => {
  it("should be able to render correctly", () => {
    const { container } = renderWithTheme(
      <Select label="label" options={options} onChange={jest.fn()} />
    );

    expect(screen.getByText("label")).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should be able to render disabled", () => {
    renderWithTheme(
      <Select label="label" options={options} onChange={jest.fn()} disabled />
    );
    const selectElement = screen.getByRole("button");

    expect(selectElement).toHaveStyle({
      opacity: 0.6,
      cursor: "not-allowed",
    });

    fireEvent.click(selectElement);

    expect(screen.getByTestId("drop").getAttribute("aria-hidden")).toBe("true");
  });

  it("should be able to render and select options", () => {
    const onChange = jest.fn();
    renderWithTheme(
      <Select label="label" options={options} onChange={onChange} />
    );

    const selectElement = screen.getByRole("button");
    expect(screen.getAllByRole("button")).toHaveLength(1);

    fireEvent.click(selectElement);

    expect(screen.getByTestId("drop").getAttribute("aria-hidden")).toBe(
      "false"
    );
    expect(screen.getAllByRole("button")).toHaveLength(4);

    fireEvent.click(screen.getByRole("button", { name: /100km/i }));

    expect(screen.getByTestId("drop").getAttribute("aria-hidden")).toBe("true");
    expect(selectElement).toHaveTextContent("label: 100km");
    expect(onChange).toHaveBeenCalledWith("100");
  });
});
