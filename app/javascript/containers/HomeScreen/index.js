import React from "react";
import { Grid, Typography, Button, Link } from "@material-ui/core";
import CoverImage from "../../images/coverImage.svg";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import mruLogo from "../../images/mruLogo.png";
import Blocks from "images/resultIcons/Blocks.svg";
import TeacherGuide from "images/resultIcons/TeacherGuide.svg";

// import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time

const HomeScreen = ({ classes, setCurrentScreen }) => {
  const handleClick = () => setCurrentScreen("Tutorial");

  const logoClick = (e) => {
    e.stopPropagation();
    window.open("https://mru.org");
  };

  return (
    <Grid
      container
      justify="space-between"
      direction="column"
      className={classes.homeScreenContainer}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ flexWrap: "nowrap" }}
        onClick={handleClick}
      >
        <Typography variant="h5" className={classes.homeTitle}>
          ECON PRACTICE
        </Typography>
        <img src={CoverImage} className={classes.logo} />
        <Grid className={classes.quizDesc}>
          <Typography variant="h5" className={classes.homeDesc}>
            Finding Equilibrium
          </Typography>
        </Grid>
        <Button className={classes.submitButton} onClick={handleClick}>
          PLAY
        </Button>
      </Grid>
      <Grid container justify="space-between" style={{ position: "relative" }}>
        <Grid className={classes.forTeachers} style={{}}>
          <Typography className={classes.forStudentsTitle}>
            FOR TEACHERS
          </Typography>
          <Link
            href="https://mru.org/get-shifts-supply-or-demand-interactive-practice-teachers-guide/receive"
            target="_blank"
            className={classes.sideBarLink}
          >
            <img src={TeacherGuide} className={classes.linkImg} />
            <Grid>
              <Typography className={classes.sideBarLinkText}>
                GET TEACHER'S GUIDE
              </Typography>
            </Grid>
          </Link>
          <Link
            href="https://mru.org/supplydemand"
            target="_blank"
            className={classes.sideBarLink}
          >
            <img src={Blocks} className={classes.linkImg} />
            <Grid>
              <Typography className={classes.sideBarLinkText}>
                GET UNIT PLAN
              </Typography>
              <Typography className={classes.sideBarLinkText}>
                Supply and Demand
              </Typography>
            </Grid>
          </Link>
        </Grid>
        <Grid style={{ padding: "2rem" }} />
        <Grid className={classes.mruLogo}>
          <img src={mruLogo} width="110px" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(HomeScreen);
