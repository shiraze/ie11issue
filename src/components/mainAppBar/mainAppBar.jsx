import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const MainAppBar = ({ classes: { appbar, toolbar, grow } }) => {
  return (
    <AppBar position="fixed" className={appbar}>
      <Toolbar className={toolbar}>
        <div className={grow} />
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
