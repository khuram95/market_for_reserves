import React, { useState, useEffect } from "react";
import correctIcon from "../../../../../src/images/Correct.svg";
import NotQuiteIcon from "../../../../../src/images/notQuite.svg";
import IncorrectIcon from "../../../../../src/images/Incorrect.svg";
import { Grid, Typography } from "@material-ui/core";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";

const QuizAnswer = ({ questionAnswer, classes, moved, showBriefness }) => {
  const [answerImage, setAnswerImage] = useState("");
  const [answerMessage, setAnswerMessage] = useState("");

  useEffect(() => {
    whatWasMoved();
  }, [moved]);

  const whatWasMoved = () => {
    switch (moved) {
      case "nothing":
        setAnswerImage(IncorrectIcon);
        setAnswerMessage("");
        return;
      case "correct":
        setAnswerImage(correctIcon);
        setAnswerMessage("");
        return;
      case "incorrect":
        setAnswerImage(IncorrectIcon);
        setAnswerMessage("");
        return;
      case "moved demand curve but in opposite":
        setAnswerImage(NotQuiteIcon);
        setAnswerMessage(
          "You were right to shift the demand curve, but you did it in the wrong direction."
        );
        return;
      case "moved supply curve but in opposite":
        setAnswerImage(NotQuiteIcon);
        setAnswerMessage(
          "You were right to shift the supply curve, but you did it in the wrong direction."
        );
        return;
    }
  };

  const answerPrefix = () => {
    if (questionAnswer.graphType === "supply curve") {
      return (
        !questionAnswer.answer.includes("Nothing") &&
        (questionAnswer.answer.includes("shifts")
          ? "Supply curve "
          : "Quantity supplied ")
      );
    } else {
      return (
        !questionAnswer.answer.includes("Nothing") &&
        (questionAnswer.answer.includes("shifts")
          ? "Demand curve "
          : "Quantity demanded ")
      );
    }
  };

  return (
    <Grid className={classes.answerContainer}>
      <Typography variant="h5" className={classes.QuestionTextAgain}>
        Q. {questionAnswer.question}
        <br />
        {questionAnswer.subQuestion}
      </Typography>
      <img src={answerImage} className={classes.correctIncorrectIcon} />
      <Typography variant="h4" className={classes.curveShiftingText}>
        {/* {answerPrefix()} */}
        {questionAnswer.answer}
      </Typography>
      {showBriefness && (
        <Typography variant="h5" className={classes.briefNessHeading}>
          {answerMessage}
        </Typography>
      )}
      <Typography variant="h5" className={classes.briefNess}>
        {questionAnswer.briefness}
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(QuizAnswer);
