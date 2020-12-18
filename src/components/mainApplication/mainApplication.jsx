import { Component } from "react";

import MainAppBar from "../mainAppBar";
import MainPage from "../mainPage";


export default class MainApplication extends Component {
  isIE = /*@cc_on!@*/ false || !!document.documentMode;

  componentDidMount() {
    if (this.isIE) return;
  }

  render() {
    return (
      <>
        <MainAppBar hideSignIn={this.isIE} />
        <MainPage openMainMenu={null} />
      </>
    );
  }
}
