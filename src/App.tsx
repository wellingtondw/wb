import { ThemeProvider } from "styled-components";
import { Home } from "./pages/Home";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";

import { Provider } from "react-redux";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
