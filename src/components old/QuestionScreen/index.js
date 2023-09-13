import React, { useState, useEffect } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, Typography } from "@material-ui/core";
import styles from "./styles";
import "animate.css/animate.css";
import BreakingNews from "../BreakingNews";
import AnswerOptions from "../AnswerOptions";
import calender from "../../images/calendar.gif";
import checkmark from "../../images/checkmark.svg";
import wrong from "../../images/wrong.svg";
import CountUp from "react-countup";
import "animate.css/animate.css";

const QuestionScreen = (props) => {
  const {
    classes,
    questionAnswer,
    addToTotalBalance,
    totalBalance,
    previousBalance,
    setAnsweredCorrectly,
  } = props;
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState(-1); //0 for for index, 1 for for second index
  const [showAnswer, setShowAnswer] = useState(false);
  function setBackground(e) {
    e.target.style.background = "#003E4C";
    e.target.style.color = "#fff";
  }

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        setShowAnswer(true);
        setAnsweredCorrectly(selected === questionAnswer.correctAnswer);
        addToTotalBalance(selected);
      }, 2000);
    }
  }, [submitted]);

  return (
    <Grid container alignItems="center" direction="column">
      {(!submitted || showAnswer) && (
        <Grid container
          className={classes.priceContainer}
        >
          <Typography className={classes.balanceText}>
            Bank Balance:
            <span className={classes.balancePrice}>
              $
              {showAnswer ? (
                <CountUp
                  end={totalBalance}
                  className={"animate__animated animate__bounceIn"}
                  start={previousBalance}
                  // delay={2}
                  // duration={2}
                />
              ) : (
                totalBalance
              )}
            </span>
          </Typography>
          <Typography></Typography>
        </Grid>
      )}

      <Grid container item justify="center" alignItems="center">
        {!submitted && (
          <>
            <Grid
              container
              item
              justify="center"
              alignItems="center"
              className={classes.mainContainer}
            >
              <BreakingNews questionAnswer={questionAnswer} />
              <AnswerOptions
                questionAnswer={questionAnswer}
                selected={selected}
                setSelected={setSelected}
              />
            </Grid>
            <Button
              className={`${classes.nextButton} ${!submitted && classes.submitButton}`}
              disabled={selected === -1}
              onClick={() =>
                submitted ? console.log("helllo") : setSubmitted(true)
              }
            >
              {submitted ? "NEXT" : "SUBMIT"}
            </Button>
          </>
        )}

        {submitted && !showAnswer && (
          <Grid
            className={ classes.oneYearContainer }
          >
            <img src={calender} alt={"Calender"} />
            <Typography className={classes.options}>
              One year later...
            </Typography>
          </Grid>
        )}

        {showAnswer && (
          <Grid container className={classes.showAnswerContainer}>
            <Grid
              className={classes.answerContainer}
            >
              <Grid
                container
                className={classes.leftContainer}
              >
                <Typography className={classes.inflationText}>
                  ACTUAL INFLATION:{" "}
                  <span
                    className={`animate__animated animate__bounceIn ${classes.InflationPercentage}`}
                  >
                    {questionAnswer.actualRate}
                  </span>
                </Typography>
                <Grid container>
                  {questionAnswer.options.map((value, index) => (
                    <Grid container className={classes.optionsGrid}>
                      {selected === index &&
                        (selected === questionAnswer.correctAnswer ? (
                          <img
                            src={checkmark}
                            className={classes.tickIcon}
                            alt={"checkmark"}
                          />
                        ) : (
                          <img
                            src={wrong}
                            className={classes.tickIcon}

                            alt={"wrong"}
                          />
                        ))}

                      <Typography
                        className={classes.optionsText}
                        style={{
                          backgroundColor:
                            selected === index
                              ? selected === questionAnswer.correctAnswer
                                ? "#508a05"
                                : "#e03616"
                              : index === questionAnswer.correctAnswer
                              ? "#508a05"
                              : "#4c4c4c",
                        }}
                      >
                        {questionAnswer.displayOptions[index]}
                      </Typography>
                      <Typography className={classes.optionsPrice}>
                        {questionAnswer.stringPrices[index]}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
              <Grid
                container
                className={classes.rightContainer}
              >
                <Typography style={{ flex: 2 }} />
                <Typography
                  className={classes.questionText}
                >
                  Q. {questionAnswer.question}
                </Typography>
                <Typography
                  className={classes.descriptionText}
                >
                  {questionAnswer.description}
                </Typography>
                <Typography style={{ flex: 1 }} />
              </Grid>
            </Grid>
            <Button
              className={`${classes.nextButton} ${classes.saveButton}`}
              onClick={() =>
                submitted ? props.nextQuestion() : setSubmitted(true)
              }
            >
              {submitted ? "NEXT" : "SUBMIT"}
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(QuestionScreen);
