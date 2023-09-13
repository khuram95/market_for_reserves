import React from "react";
import { Button, Grid, Modal, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import Correct from "../../images/Correct.svg";
import Incorrect from "../../images/Incorrect.svg";
import styles from "./styles";
import "animate.css/animate.css";

const EvaluatorModal = ({
  classes,
  nextQuestion,
  answeredCorrectly,
  question,
}) => {
  let newPrice =
    parseFloat(question.old.price.replace(",", "")) *
    (question.new.cpi / question.old.cpi);
  return (
    <Modal open={true}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid className={`${classes.evaluatorModalContainer}`}>
          <Grid container justify="center">
            {answeredCorrectly ? (
              <img
                alt=""
                src={Correct}
                className={classes.correctIncorrectIcon}
              />
            ) : (
              <img
                alt=""
                src={Incorrect}
                className={classes.correctIncorrectIcon}
              />
            )}
          </Grid>
          <Grid container style={{ padding: "30px 0px" }}>
            <Grid item style={{ flex: 1 }}>
              <Typography className={classes.yearPrice}>
                {question.old.year} price
              </Typography>
              <Typography className={classes.yearPrice}>
                {question.old.price}
              </Typography>
            </Grid>
            <Grid
              item
              style={{
                backgroundColor: "#ececec",
                margin: "0px 5px",
                flex: 1,
              }}
            >
              <Typography className={classes.yearPrice}>
                {question.new.year} price
              </Typography>
              <Typography className={classes.yearPrice}>
                {question.new.price}
              </Typography>
              <Typography
                className={classes.yearPrice}
                style={{ color: "#538918" }}
              >
                (Cheaper!)
              </Typography>
            </Grid>
            <Grid item style={{ backgroundColor: "#ececec", flex: 2 }}>
              <Typography className={classes.yearPrice}>
                {question.old.year} price in {question.new.year} dollars
              </Typography>
              <Typography>${Number.parseFloat(newPrice).toFixed(2)}</Typography>
            </Grid>
          </Grid>
          <Typography className={classes.evalDesc}>Text</Typography>
          <Grid container justify="center">
            <Button
              className={classes.submitButton}
              onClick={() => nextQuestion()}
            >
              NEXT
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default withStyles(styles)(EvaluatorModal);
