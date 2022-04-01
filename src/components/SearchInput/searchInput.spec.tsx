import { renderWithTheme } from "../../utils/tests/helper";

import { SearchInput } from ".";
import { fireEvent, screen } from "@testing-library/react";

describe("<SearchInput />", () => {
  it("should be able to render correctly", () => {
    const { container } = renderWithTheme(
      <SearchInput label="label" icon="location" />
    );

    expect(screen.getByText("label")).toBeInTheDocument();
    expect(screen.getByText("label").previousSibling).toHaveClass(
      "icon-location"
    );
    expect(screen.getByRole("button").firstChild).toHaveClass("icon-close");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should be able to change and clear input value", () => {
    const onInputChange = jest.fn();
    renderWithTheme(
      <SearchInput
        label="label"
        icon="location"
        disabled
        onInputChange={onInputChange}
      />
    );

    const inputElement = screen.getByRole("textbox");
    const buttonClearElement = screen.getByRole("button");

    fireEvent.change(inputElement, { target: { value: "input changed" } });

    expect(inputElement).toHaveValue("input changed");
    expect(onInputChange).toHaveBeenCalledWith("input changed");

    fireEvent.click(buttonClearElement);

    expect(inputElement).toHaveValue("");
  });
});
