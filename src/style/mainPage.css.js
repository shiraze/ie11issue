export default theme => ({
  mainPage: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  drawerOpen: {
    paddingLeft: theme.menu.mainMenu + theme.menu.collapsedSearchMenu,
    transition: theme.transitions.create("padding-left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  searchOpen: {
    paddingLeft: theme.menu.collapse + theme.menu.searchMenu,
    transition: theme.transitions.create("padding-left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  bothOpen: {
    paddingLeft: theme.menu.mainMenu + theme.menu.searchMenu,
    transition: theme.transitions.create("padding-left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    paddingLeft: theme.menu.collapse + theme.menu.collapsedSearchMenu,
    transition: theme.transitions.create("padding-left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: theme.mixins.toolbar,
  resultsTable: {
    width: "100%",
  },
  splashScreen: {
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    left: theme.menu.collapse,
    width: "100%",
  },
  warningText: {
    textAlign: "justify",
  },
  splashScreenImage: {
    display: "block",
    margin: "auto",
    width: "90%",
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      width: "80%",
    },
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    [theme.breakpoints.up("lg")]: {
      width: "53%",
    },
    [theme.breakpoints.up("xl")]: {
      width: "30%",
    },
  },
});
