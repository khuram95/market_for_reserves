import React, { useState, useEffect } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import LineDotLeftHandler from "./LineDotLeftHandler";
import LineDotRightHandler from "./LineDotRightHandler";
import { Grid, Typography, Button, Modal } from "@material-ui/core";
import youCan from "../../images/youCan.svg";
import shiftTheCurve from "../../images/shiftTheCurve.svg";
import priceWhite from "../../images/priceWhite.svg";
import quantityWhite from "../../images/quantityWhite.svg";
import dragLine from "../../images/dragLine.svg";
import dragLineRight from "../../images/dragLineRight.svg";

import "animate.css/animate.css";

const Simulation = (props) => {
  const { classes, setCurrentScreen } = props;

  const [move, setMove] = useState("none");
  const [quizButton, setQuizButton] = useState("skip");
  const [showYouCanText, setShowYouCanText] = useState(false);
  const [showShiftText, setShowShiftText] = useState(false);
  const [showGraphs, setShowGraphs] = useState(false);

  const [runTutorial, setRunTutorial] = useState("none");

  useEffect(() => {
    setTimeout(() => {
      setShowYouCanText(true);
    }, 1000);
    setTimeout(() => {
      setShowShiftText(true);
    }, 2000);
    setTimeout(() => {
      setShowGraphs(true);
    }, 2000);
    // setTimeout(() => {
    //   onClickSkip()
    // }, 9000)
    // setTimeout(() => {
    //   setRunTutorial("line")
    // }, 5000)
    // setTimeout(() => {
    //   setRunTutorial("or")
    // }, 8000)
    // setTimeout(() => {
    //   setRunTutorial("dot")
    // }, 11000)
  }, []);

  // useEffect(() => {
  //   switch (runTutorial) {
  //     case "none":
  //       break;
  //     case "line":
  //       setTimeout(() => { setMove("line") }, 1000)
  //       break;
  //     case "or":
  //       setMove("none")
  //       break;
  //     case "dot":
  //       setTimeout(() => { setMove("dot") }, 1000)
  //       setTimeout(() => { setQuizButton("got it") }, 5000)
  //       setTimeout(() => { onClickSkip() }, 8000)
  //         break;
  //     default:
  //       break;
  //   }
  // },[runTutorial])

  const onClickSkip = () => setCurrentScreen("Quiz");

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      onClick={onClickSkip}
      style={{ cursor: "pointer" }}
    >
      <Grid className={classes.tutorialGrid}>
        <Typography className={classes.tutorialText}>TUTORIAL</Typography>
      </Grid>
      {showYouCanText && (
        <Grid
          container
          item
          justify="center"
          className="animate__animated animate__bounceIn"
        >
          <img src={youCan} className={classes.youCanImg} />
        </Grid>
      )}
      {showShiftText && (
        <Grid
          container
          item
          justify="center"
          className="animate__animated animate__bounceIn"
        >
          <img src={shiftTheCurve} className={classes.shiftTheCurve} />
        </Grid>
      )}
      {showGraphs && (
        <>
          <Grid
            container
            item
            justify="center"
            className={[
              classes.graphContainer,
              "animate__animated animate__bounceIn",
            ]}
          >
            <Grid
              container
              className={classes.graphDivContainer}
              style={{ marginRight: "30px" }}
            >
              <div className={classes.graphDiv}>
                <Grid container justify="center" style={{ maxWidth: "520px" }}>
                  <Grid className={classes.graphLines}>
                    <img src={dragLine} className={classes.dragLineMessage} />
                    {/* <img
                      src={dragLineRight}
                      className={classes.dragLineRightMessage}
                    /> */}
                    <img src={priceWhite} className={classes.graphYLable} />
                    <LineDotLeftHandler move={"line"} />
                    {/* <LineDotRightHandler move={'line'}/> */}
                    <img src={quantityWhite} className={classes.graphXLable} />
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid container className={classes.graphDivContainer}>
              <div className={classes.graphDiv}>
                <Grid container justify="center" style={{ maxWidth: "520px" }}>
                  <Grid className={classes.graphLines}>
                    <img src={priceWhite} className={classes.graphYLable} />
                    <LineDotLeftHandler move={"dot"} />
                    {/* <LineDotRightHandler move={'dot'}/> */}
                    <img src={quantityWhite} className={classes.graphXLable} />
                  </Grid>
                </Grid>
              </div>

              {/* <Grid className={classes.questionContainer}> */}
              {/* <LineDotLeft move={'dot'}/> */}
              {/* <Grid className={classes.questionBody}>
                <Typography className={classes.questionTitle}>
                  HOW TO PLAY
                </Typography>
                {runTutorial === 'line' && <ShiftTheLine/>}
                {runTutorial === 'or' && <Typography className={[classes.questionText, "animate__animated animate__bounceIn"]} style={{ textAlign: 'center', paddingTop: '30px'}}>
                  OR
                </Typography>}
                {runTutorial === 'dot' && <MoveThePoint/>}
              </Grid> */}
            </Grid>
          </Grid>
          <Button className={classes.submitButton} onClick={onClickSkip}>
            GOT IT
            {/* {quizButton === 'skip' ? "SKIP" : "GOT IT"} */}
          </Button>
        </>
      )}
    </Grid>
  );
};

export default withStyles(styles)(Simulation);
