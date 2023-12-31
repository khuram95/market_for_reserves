import React from "react";
import styles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import "animate.css/animate.css";

const BreakingNews = ({ questionAnswer, classes }) => {
  return (
    <Grid
      className={`${classes.questionContainer} animate__animated animate__bounceIn`}
    >
      <Grid className={classes.questionBody}>
        <img
          src={questionAnswer.scenarioImage}
          className={classes.breakingNews}
        ></img>
        <img
          src={questionAnswer.questionImage}
          className={classes.circleIcon}
        ></img>

        <Typography variant="h5" className={classes.questionText}>
          {questionAnswer.question}
        </Typography>
        <Typography variant="h5" className={classes.subQuestionText}>
          {questionAnswer.subQuestion}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(BreakingNews);
