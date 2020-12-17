import { connect } from "react-redux";

import { withStyles } from "@material-ui/core/styles";

import styles from "../../style/mainPage.css";

import MainPage from "./mainPage";

const mapStateToProps = state => ({
  connection: state.mainPage.connection,
  query: state.mainPage.query,
  form: state.mainPage.activeForm?.form,
  openSearchDrawer: state.mainPage.searchDrawer,
});

export default connect(mapStateToProps)(withStyles(styles)(MainPage));
