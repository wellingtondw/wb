import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "../../utils/tests/helper";

import { Checkbox } from ".";

describe("<Checkbox />", () => {
  it("should render with label", () => {
    const { container } = renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" />
    );

    expect(screen.getByRole("checkbox")).toBeInTheDocument();

    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument();

    expect(screen.getByText(/checkbox label/i)).toHaveAttribute("for", "check");

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render without label", () => {
    renderWithTheme(<Checkbox />);

    expect(screen.queryByLabelText("Checkbox")).not.toBeInTheDocument();
  });

  it("should dispatch onCheck when status changes", async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} />);

    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it("should call onCheck with false if the Checkbox is already checked", async () => {
    const onCheck = jest.fn();

    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />);

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it("should be accessible with tab", () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />);

    expect(document.body).toHaveFocus();

    userEvent.tab();

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus();
  });
});
