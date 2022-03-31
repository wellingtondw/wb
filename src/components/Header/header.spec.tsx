import { renderWithTheme } from "../../utils/tests/helper";

import { Header } from ".";

describe("<Header />", () => {
  it("should be able to render correctly", () => {
    const { container } = renderWithTheme(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
