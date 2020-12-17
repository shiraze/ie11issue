import { createMuiTheme } from "@material-ui/core/styles";

// This is our default theme, and will be applied
// if not overridden by a custom theme, via getCustomTheme()
export const theme = createMuiTheme({
  typography: {
    h1: { fontSize: "3em" },
    h2: { fontSize: "2em" },
    h3: { fontSize: "1.5em" },
    h4: { fontSize: "1.2em" },
    h5: { fontSize: "1em" },
    h6: { fontSize: "0.8em" },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#fafafa",
    },
    primary: {
      light: "rgb(76, 81, 111)",
      main: "rgb(27, 29,  76)",
      dark: "rgb(0, 0,  29)",
      contrastText: "rgb(255, 255,  255)",
    },
    secondary: {
      light: "rgb(255, 202, 71)",
      main: "rgb(255,153,0)",
      dark: "rgb(198, 106, 0)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgb(0, 0, 0)",
      secondary: "rgb(115, 115, 115)",
      disabled: "rgba(0, 0, 125, 0.38)",
      hint: "rgba(255, 0, 0, 0.3)",
    },
  },
  menu: {
    mainMenu: 170,
    searchMenu: 400,
    collapsedSearchMenu: 15,
    collapsedSearchHeight: 64,
    collapse: 70,
    formInnerCard: 250,
    formOuterCard: 100,
    // note: some more 'magic numbers' in resultsList.jsx
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});
