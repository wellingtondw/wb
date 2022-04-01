import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { ThemeProvider } from "styled-components";
import store from "../../store";

import theme from "../../styles/theme";

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
  render(<ThemeProvider theme={theme}>{children}</ThemeProvider>);

export const renderWithThemeAndRedux = (
  children: React.ReactNode,
  mockStore?: Store
): RenderResult =>
  render(
    <Provider store={mockStore || store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
