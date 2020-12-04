import React, { useState, useEffect } from 'react'
import LineDotLeft from '../LineDotLeft'
import LineDotRight from '../LineDotRight'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button, Fade } from '@material-ui/core'
import price from '../../images/price.svg'
import quantity from '../../images/quantity.svg'
import CorrectIcon from '../../images/correct.svg'
import NotQuiteIcon from '../../images/notQuite.svg'
import IncorrectIcon from '../../images/incorrect.svg'
import breakingNews from '../../images/breakingnews.svg'
import styles from './styles'


const questionAnswers = [
  {
    title: 'DEMAND CURVE FOR LAPTOPS',
    question: "Consumers expect the price of laptop computers to decrease in the coming months.",
    answer: "Shift left",
    briefness: "The expectation of lower prices in the future will cause a decrease in the demand for laptops today. At every price, consumers will buy fewer computers today.",
    score: 10
  },
  {
    title: 'DEMAND CURVE FOR SODA',
    question: "A reduction in the supply of soda causes the price of soda to increase.",
    answer: "Dot moves down",
    briefness: "A change in price causes movement along the curve. It does not change demand, only quantity demanded. A decrease in price would cause an increase in the quantity demanded.",
    score: 10
  },
  {
    title: 'DEMAND CURVE FOR PEANUT BUTTER',
    question: "The price of almond butter, a substitute for peanut butter, decreases.",
    answer: "Shift right",
    briefness: "When the price of almond butter decreases, consumers will purchase MORE almond butter (movement along the almond butter demand curve) and LESS peanut butter at every price (leftward shift of peanut butter demand curve).",
    score: 10
  }
]

const Graph = (props) => {
  const {classes} = props

  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null)
  const [moved, setMoved] = useState(null)
  const [answerImage, setAnswerImage] = useState(CorrectIcon)
  const [answerMessage, setAnswerMessage] = useState("")
  const [showBreakingNews, setShowBreakingNews] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setShowBreakingNews(true)
  }, [])

  useEffect(() => {
    whatWasMoved()
  }, [moved])


  const handleSubmit = () => {
    setSubmitted(true)
    setShowBreakingNews(false)
  }

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1)
    setAnsweredCorrectly(null)
    setSubmitted(false)
    setShowBreakingNews(true)
  }

  const whatWasMoved = () => {
    switch (moved) {
      case "dot but moved line":
        setAnswerImage(IncorrectIcon)
        setAnswerMessage("")
        return
      case "line but moved dot":
        setAnswerImage(IncorrectIcon)
        setAnswerMessage("")
        return
      case "dot moved opposite":
        setAnswerImage(NotQuiteIcon)
        setAnswerMessage("You where right to move the dot, but you did it in the opposite direction.")
      case "line moved opposite":
        setAnswerImage(NotQuiteIcon)
        setAnswerMessage("You where right to shift the curve, but you did it in the opposite direction.")
        return
    }
  }

  return (
    <Grid container alignItems="center" direction="column">
      <Typography variant="h2" className={classes.questionTitle}>{questionAnswers[questionIndex].title}</Typography>
      <Grid container item justify='center' alignItems='center' className={classes.graphContainer}>
      {answeredCorrectly === null
        ? <Fade in={showBreakingNews} timeout={2000}><Grid className={classes.questionContainer}>
            <Grid className={classes.questionBody}>
              <img src={breakingNews} className={classes.breakingNews}></img>
              <Typography variant='h5' className={classes.questionText}>
                {questionAnswers[questionIndex].question}
              </Typography>
            </Grid>
          </Grid>
          </Fade>
        : answeredCorrectly === true
          ? <Grid className={classes.answerContainer}>
              <img src={answerImage} width="200px" />
              <Typography variant='h4' className={classes.curveShiftingText}>
                Demand {questionAnswers[questionIndex].answer}
              </Typography>
              <Typography variant='h5' className={classes.briefNess}>
                {questionAnswers[questionIndex].briefness}
              </Typography>
            </Grid>
          : <Grid className={classes.answerContainer}>
              <img src={answerImage} width="200px" />
              <Typography variant='h4' className={classes.curveShiftingText}>
                Demand {questionAnswers[questionIndex].answer}
              </Typography>
              <Typography variant='h5' className={classes.briefNessHeading}>
                {answerMessage}
              </Typography>
              <Typography variant='h6' className={classes.briefNess}>
                {questionAnswers[questionIndex].briefness}
              </Typography>
            </Grid>}
        <div className={classes.graphDiv}>
          <Grid container justify='center' style={{maxWidth: '400px'}}>
            <Grid className={classes.graphLines}>
              <img src={price} className={classes.graphYLable}></img>

              <LineDotLeft
                questionAnswer={questionAnswers[questionIndex]}
                setAnsweredCorrectly={setAnsweredCorrectly}
                answeredCorrectly={answeredCorrectly}
                setScore={setScore}
                setMoved={setMoved}
                submitted={submitted}
                key={questionIndex}
              />
              {/* <LineDotRight
                questionAnswer={questionAnswers[questionIndex]}
                setAnsweredCorrectly={setAnsweredCorrectly}
                answeredCorrectly={answeredCorrectly}
              /> */}
            </Grid>
            <img src={quantity} className={classes.graphXLable}></img>
          </Grid>
        </div>
      </Grid>
      <Button
        onClick={submitted ? nextQuestion : handleSubmit}
        className={classes.submitButton}
      >
        {submitted ? "NEXT" : "SUBMIT"}
      </Button>
    </Grid>
  )
}

export default withStyles(styles)(Graph)
