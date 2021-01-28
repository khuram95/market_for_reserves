import React, { useState, useEffect } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'
import styles from './styles'
import GraphLineDot from "./GraphLineDot"
import QuizQuestion from './QuizQuestion'

const Graph = (props) => {
  const {
    classes,
    setAnswers,
    questionAnswer,
    nextQuestion,
    resetGraph,
    modalOpen,
  } = props


  const [answeredCorrectly, setAnsweredCorrectly] = useState(null)
  const [moved, setMoved] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [dottedLineLabels, setDottedLineLabels] = useState(false)
  const [hideQuestionBeforeAnimation, setHideQuestionBeforeAnimation] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHideQuestionBeforeAnimation(false)
    }, 500)
  }, [])

  useEffect(() => {
    if(answeredCorrectly !== null)
      setAnswers((prevAnswers) => [...prevAnswers, answeredCorrectly])
  }, [moved])

  const handleSubmit = () => {
    setSubmitted(true)
    questionAnswer.answer.includes('goes') && setTimeout(() => setDottedLineLabels(true), 1000)
  }

  return (
    <Grid container alignItems="center" direction="column">
      <Grid container item justify='center' alignItems='center'>
        <Grid style={{position: "relative", display: "flex", alignSelf: "flex-start"}}>
          <GraphLineDot
            questionAnswer={questionAnswer}
            setAnsweredCorrectly={setAnsweredCorrectly}
            answeredCorrectly={answeredCorrectly}
            setMoved={setMoved}
            modalOpen={modalOpen}
            submitted={submitted}
            dottedLineLabels={dottedLineLabels}
            key={resetGraph}
          />
            <Button
              onClick={submitted ? nextQuestion : handleSubmit}
              className={submitted ? classes.nextButton : classes.submitButton}
            >
              {submitted ? "NEXT" : "SUBMIT"}
            </Button>
        </Grid>
        {hideQuestionBeforeAnimation
          ? <Grid className={classes.questionContainerHidden}/>
          : <QuizQuestion
              answeredCorrectly={answeredCorrectly}
              questionAnswer={questionAnswer}
              moved={moved}
            />}
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Graph)
