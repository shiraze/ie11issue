import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";

import MainPagePosition from "./mainPagePosition";

const MainPage = props => {
  const {
    classes: { splashScreenImage },
  } = props;

  return (
    <MainPagePosition {...props} logo>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Fade in {...{ timeout: 1000 }}>
            <img alt="" src="Welcome-BG.jpg" className={splashScreenImage} />
          </Fade>
        </Grid>
      </Grid>
    </MainPagePosition>
  );
};

export default MainPage;
