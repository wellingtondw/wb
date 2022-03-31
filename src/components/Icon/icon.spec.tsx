import { renderWithTheme } from "../../utils/tests/helper";

import { Icon } from ".";

describe("<Icon />", () => {
  it("should be able to render correctly", () => {
    const { container } = renderWithTheme(<Icon icon="car" />);
    expect(container.firstChild).toHaveClass("icon-car");
    expect(container.firstChild).toMatchSnapshot();
  });
});
