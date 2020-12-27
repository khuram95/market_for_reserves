import React, { useState, useEffect } from 'react'
import LineDotLeft from '../LineDotLeft'
import LineDotRight from '../LineDotRight'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button, Modal } from '@material-ui/core'
import price from '../../images/price.svg'
import quantity from '../../images/quantity.svg'
import correctIcon from '../../images/correct.svg'
import NotQuiteIcon from '../../images/notQuite.svg'
import IncorrectIcon from '../../images/incorrect.svg'
import breakingNews from '../../images/breakingnews.svg'
import peanutbutterCircleIcon from '../../images/peanutbutterCircle.png'
import sodaCircleIcon from '../../images/sodaCircle.png'
import laptopCircleIcon from '../../images/laptopCircle.png'
import { useHistory } from 'react-router-dom'
import styles from './styles'
import 'animate.css/animate.css'

const questionAnswers = [
  {
    title: 'DEMAND CURVE FOR LAPTOPS',
    question: "Consumers expect the price of laptop computers to decrease in the coming months.",
    subQuestion: "What happens to the demand for laptops?",
    icon: 'laptop',
    answer: "shifts left",
    briefness: "The expectation of lower prices in the future will cause a decrease in the demand for laptops today. At every price, consumers will buy fewer computers today.",
    score: 10
  },
  {
    title: 'DEMAND CURVE FOR SODA',
    question: "A reduction in the supply of soda causes the price of soda to increase.",
    subQuestion: "What happens to the demand for soda?",
    icon: 'soda',
    answer: "goes up",
    briefness: "A change in price causes movement along the curve. It does not change demand, only quantity demanded. A decrease in price would cause an increase in the quantity demanded.",
    score: 10
  },
  {
    title: 'DEMAND CURVE FOR PEANUT BUTTER',
    question: "The price of almond butter, a substitute for peanut butter, decreases.",
    subQuestion: "What happens to the demand for peanut butter?",
    icon: 'peanut butter',
    answer: "shifts left",
    briefness: "When the price of almond butter decreases, consumers will purchase MORE almond butter (movement along the almond butter demand curve) and LESS peanut butter at every price (leftward shift of peanut butter demand curve).",
    score: 10
  }
]

const Graph = (props) => {
  const {classes} = props

  let history = useHistory()

  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null)
  const [moved, setMoved] = useState(null)
  const [answerImage, setAnswerImage] = useState(correctIcon)
  const [answerMessage, setAnswerMessage] = useState("")
  const [showBreakingNews, setShowBreakingNews] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [animationClass1, setAnimationClass1] = useState('animate__animated animate__bounceIn')
  const [animationClass2, setAnimationClass2] = useState('')
  const [open, setOpen] = useState(false);
  const [resetGraph, setResetGraph] = useState(false);
  const [answersArray, setAnswersArray] = useState([])
  const [hideQuestionBeforeAnimation, setHideQuestionBeforeAnimation] = useState(true);

  // let answers = []

  useEffect(() => {
    setShowBreakingNews(true)
    setTimeout(() => {
      setHideQuestionBeforeAnimation(false)
      setAnimationClass2('animate__animated animate__bounceIn')
      setTimeout(() => {
        setAnimationClass2('')
      }, 500)
    }, 500)
  }, [])

  useEffect(() => {
    if(answeredCorrectly !== null)
      setAnswersArray([...answersArray, answeredCorrectly])
    console.log("answer", answersArray)
    whatWasMoved()
  }, [moved])

  console.log("answersArray", answersArray)

  const modalOpen = () => setOpen(true);

  const modalClose = () => {
    setOpen(false);
    setResetGraph(false)
  };

  const resetPosition = () => setResetGraph(true)

  const handleSubmit = () => {
    setAnimationClass1('')
    setSubmitted(true)
    setShowBreakingNews(false)
  }

  const circleIcon = {
    "peanut butter": <img src={peanutbutterCircleIcon} className={classes.circleIcon}></img>,
    "soda": <img src={sodaCircleIcon} className={classes.circleIcon}></img>,
    "laptop": <img src={laptopCircleIcon} className={classes.circleIcon}></img>

  }

  const isQuizCompleted = () => {
    if(!(questionIndex + 1 < questionAnswers.length))
      history.push('/result')
  }

  const nextQuestion = () => {
    setHideQuestionBeforeAnimation(true)
    isQuizCompleted()
    setQuestionIndex(questionIndex + 1)
    setAnsweredCorrectly(null)
    setSubmitted(false)
    setShowBreakingNews(true)
    setMoved(null)
    setAnimationClass1('animate__animated animate__bounceIn')
    setTimeout(() => {
      setAnimationClass1('')
      setHideQuestionBeforeAnimation(false)
      setAnimationClass2('animate__animated animate__bounceIn')
      setTimeout(() => {
        setAnimationClass2('')
      }, 500)
    }, 500)
  }

  const whatWasMoved = () => {
    console.log('ggg: ', moved)
    switch (moved) {
      case 'nothing':
        setAnswerImage(IncorrectIcon)
        setAnswerMessage("")
        return
      case 'correct':
        setAnswerImage(correctIcon)
        setAnswerMessage("")
        return
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
        setAnswerMessage("You were right to move the dot, but you did it in the wrong direction.")
      case "line moved opposite":
        setAnswerImage(NotQuiteIcon)
        setAnswerMessage("You were right to shift the curve, but you did it in the wrong direction.")
        return
    }
  }

  return (
    <Grid container alignItems="center" direction="column">
      <Grid container item justify='space-evenly' alignItems='center' className={[classes.graphContainer]}>
        <Grid>
          <Typography variant="h5" align='right' className={[classes.questionTitle, animationClass1]}>{questionAnswers[questionIndex].title}</Typography>
          <div className={classes.graphDiv}>
            <Grid container justify='center' style={{maxWidth: '520px'}}>
              <Grid className={classes.graphLines}>
                <img src={price} className={classes.graphYLable}></img>

                <LineDotLeft
                  questionAnswer={questionAnswers[questionIndex]}
                  setAnsweredCorrectly={setAnsweredCorrectly}
                  answeredCorrectly={answeredCorrectly}
                  setScore={setScore}
                  setMoved={setMoved}
                  submitted={submitted}
                  resetGraph={resetGraph}
                  modalClose={modalClose}
                  modalOpen={modalOpen}
                  key={questionIndex}
                />
                {/* <LineDotRight
                  questionAnswer={questionAnswers[questionIndex]}
                  setAnsweredCorrectly={setAnsweredCorrectly}
                  answeredCorrectly={answeredCorrectly}
                /> */}
              <img src={quantity} className={classes.graphXLable}></img>
              </Grid>
            </Grid>
          </div>
        </Grid>
        {answeredCorrectly === null
        ? hideQuestionBeforeAnimation
          ? <Grid className={classes.questionContainerHidden}/>
          : <Grid className={[classes.questionContainer, animationClass2]}>
              <Grid className={classes.questionBody}>
                <img src={breakingNews} className={classes.breakingNews}></img>
                {circleIcon[questionAnswers[questionIndex].icon]}
                {/* <img src={peanutbutterCircleIcon} className={classes.circleIcon}></img> */}

                <Typography variant='h5' className={classes.questionText}>
                  {questionAnswers[questionIndex].question}
                </Typography>
                <Typography variant='h5' className={classes.subQuestionText}>
                  {questionAnswers[questionIndex].subQuestion}
                </Typography>
              </Grid>
            </Grid>
        : answeredCorrectly === true
          ? <Grid className={classes.answerContainer}>
              <img src={answerImage} width="200px" />
              <Typography variant='h4' className={classes.curveShiftingText}>
                {questionAnswers[questionIndex].answer.includes('shifts') ? 'Demand curve ' : 'Quantity demanded '}
                {questionAnswers[questionIndex].answer}
              </Typography>
              <Typography variant='h5' className={classes.briefNess}>
                {questionAnswers[questionIndex].briefness}
              </Typography>
            </Grid>
          : <Grid className={classes.answerContainer}>
              <img src={answerImage} width="200px" />
              <Typography variant='h4' className={classes.curveShiftingText}>
                {questionAnswers[questionIndex].answer.includes('shifts') ? 'Demand curve ' : 'Quantity demanded '}
                {questionAnswers[questionIndex].answer}
              </Typography>
              <Typography variant='h5' className={classes.briefNessHeading}>
                {answerMessage}
              </Typography>
              <Typography variant='h6' className={classes.briefNess}>
                {questionAnswers[questionIndex].briefness}
              </Typography>
            </Grid>}
      </Grid>
      <Button
        onClick={submitted ? nextQuestion : handleSubmit}
        className={classes.submitButton}
      >
        {submitted ? "NEXT" : "SUBMIT"}
      </Button>
      <Modal
        open={open}
        onClose={modalClose}
        aria-describedby="simple-modal-description"
      >
        <div className={classes.modal}>
          <p id="simple-modal-description" className={classes.modalDescription}>
            You must either shift the line OR move the dot.
          </p>
          <Button onClick={resetPosition} className={classes.backButton} >
            BACK
          </Button>
        </div>
      </Modal>
    </Grid>
  )
}

export default withStyles(styles)(Graph)
