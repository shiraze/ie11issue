import { Provider } from "react-redux";

import store from "./redux/store";
import MainApplication from "./components/mainApplication";

import CssBaseline from "@material-ui/core/CssBaseline";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "./style/muiTheme.css";

/**
 * This is our top-level React component that wraps the rest of the application in a couple of
 * third-party components that provide theming and a global store
 * We have a default theme (defined in muiTheme), but attempt to load a custom theme
 */
export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <MainApplication />
      </Provider>
    </MuiThemeProvider>
  );
}
