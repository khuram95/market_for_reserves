import React, { useState } from "react";
import questionAnswers from "./questionSet";
import styles from "./styles";
import withStyles from "@material-ui/core/styles/withStyles";
import QuestionScreen from "../../components/QuestionScreen";
import WrongMoveModal from "../../components/WrongMoveModal";
import EvaluatorModal from "../../components/EvaluatorModal";

const QuizScreen = (props) => {
  const {
    classes,
    setCurrentScreen,
    setAnswers,
    answers,
    totalBalance,
    setTotalBalance,
    ...others
  } = props;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null);
  const [previousBalance, setPreviousBalance] = useState(0);

  const modalOpen = () => setOpen(true);

  const nextQuestion = () => {
    setOpen(false);
    setAnswers([...answers, answeredCorrectly]);
    if (questionIndex >= questionAnswers.length - 1) {
      setCurrentScreen("Result");
      // setCurrentScreen("Home");
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  const addToTotalBalance = (selected) => {
    setPreviousBalance(totalBalance);
    setTotalBalance(
      questionAnswers[questionIndex].prices[selected] + totalBalance
    );
  };

  console.log("questionIndex: ", questionIndex);
  console.log("totalBalance: ", totalBalance);

  return (
    <div className={classes.quizScreenContainer}>
      <QuestionScreen
        {...others}
        questionAnswer={questionAnswers[questionIndex]}
        modalOpen={modalOpen}
        nextQuestion={nextQuestion}
        key={questionIndex}
        questionIndex={questionIndex}
        setAnsweredCorrectly={setAnsweredCorrectly}
        addToTotalBalance={addToTotalBalance}
        totalBalance={totalBalance}
        previousBalance={previousBalance}
      />
      {open && (
        <EvaluatorModal
          answeredCorrectly={answeredCorrectly}
          nextQuestion={nextQuestion}
          question={questionAnswers[questionIndex]}
        />
      )}
    </div>
  );
};

export default withStyles(styles)(QuizScreen);
