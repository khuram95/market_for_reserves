import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import LineDotLeftHandler from "./LineDotLeftHandler";
import LineDotBothHandler from "./LineDotBothHandler"
import LineDotRightHandler from "./LineDotRightHandler";
import styles from "./styles";
import "animate.css/animate.css";

const GraphLineDot = (props) => {
  const {
    classes,
    questionAnswer,
    setAnsweredCorrectly,
    answeredCorrectly,
    setMoved,
    modalOpen,
    dottedLineLabels,
    submitted,
  } = props;

  const [showDragMessage, setShowDragMessage] = useState(false);
  console.log("answeredCorrectly", answeredCorrectly)

  return (
    <Grid className={classes.quizContainer}>
      <Typography
        variant="h5"
        align="right"
        className={`${
          classes.questionTitle
        } animate__animated animate__bounceIn`}
      >
        {questionAnswer.title}
      </Typography>
      <Grid className={classes.graphDiv}>
        <Grid container justify="center" style={{ maxWidth: "520px" }}>
          {/* {questionAnswer.graphType === "demand curve"
            && <LineDotLeftHandler
                showDragMessage={showDragMessage}
                questionAnswer={questionAnswer}
                setAnsweredCorrectly={setAnsweredCorrectly}
                answeredCorrectly={answeredCorrectly}
                setMoved={setMoved}
                submitted={submitted}
                modalOpen={modalOpen}
                setShowDragMessage={setShowDragMessage}
                dottedLineLabels={dottedLineLabels}
            />} */}
          {/* {questionAnswer.graphType === "supply curve" && (
            <LineDotRightHandler
              showDragMessage={showDragMessage}
              questionAnswer={questionAnswer}
              setAnsweredCorrectly={setAnsweredCorrectly}
              answeredCorrectly={answeredCorrectly}
              setMoved={setMoved}
              submitted={submitted}
              modalOpen={modalOpen}
              setShowDragMessage={setShowDragMessage}
              dottedLineLabels={dottedLineLabels}
            />
          )} */}
          {/* {questionAnswer.graphType === "supply curve and demand curve" && ( */}
            <LineDotBothHandler
              showDragMessage={showDragMessage}
              questionAnswer={questionAnswer}
              setAnsweredCorrectly={setAnsweredCorrectly}
              answeredCorrectly={answeredCorrectly}
              setMoved={setMoved}
              submitted={submitted}
              modalOpen={modalOpen}
              setShowDragMessage={setShowDragMessage}
              dottedLineLabels={dottedLineLabels}
            />
          {/* )} */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(GraphLineDot);
