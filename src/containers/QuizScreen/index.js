import React, { useState } from "react";
import { Grid } from "@material-ui/core";
// import questionAnswers from './questionAnswers'
import questionAnswers from "./equalibriumQuestionAnswers";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Graph from "../../components/Graph";
import WrongMoveModal from "../../components/WrongMoveModal";

const QuizScreen = (props) => {
  const { classes, setCurrentScreen, ...others } = props;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [resetGraph, setResetGraph] = useState(false);

  const modalOpen = () => setOpen(false);

  const modalClose = () => {
    setOpen(false);
    setResetGraph(!resetGraph);
  };

  // const resetPosition = () => setResetGraph(true)

  const isQuizCompleted = () =>
    !(questionIndex + 1 < questionAnswers.length) && setCurrentScreen("Result");

  const nextQuestion = () => {
    // setHideQuestionBeforeAnimation(true)
    isQuizCompleted();
    setQuestionIndex(questionIndex + 1);
    // setAnsweredCorrectly(null)
    // setSubmitted(false)
    // setDottedLineLabels(false)
    // setMoved(null)
    // setTimeout(() => {
    //   setHideQuestionBeforeAnimation(false)
    // }, 500)
  };

  return (
    <div className={classes.quizScreenContainer}>
      <Graph
        {...others}
        questionAnswer={questionAnswers[questionIndex]}
        resetGraph={resetGraph}
        modalOpen={modalOpen}
        nextQuestion={nextQuestion}
        key={questionIndex}
      />
      <WrongMoveModal open={open} modalClose={modalClose} />
    </div>
  );
};

export default withStyles(styles)(QuizScreen);
