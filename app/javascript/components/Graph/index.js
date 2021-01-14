import React, { useState, useEffect } from 'react'
import LineDotLeft from '../LineDotLeft'
import LineDotRight from '../LineDotRight'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Typography, Button, Modal } from '@material-ui/core'
import price from 'images/price.svg'
import quantity from 'images/quantity.svg'
import correctIcon from 'images/correct.svg'
import NotQuiteIcon from 'images/notQuite.svg'
import IncorrectIcon from 'images/incorrect.svg'
import breakingNews from 'images/breakingnews.svg'
import dragLine from 'images/dragLineDark.svg'
import { useHistory } from 'react-router-dom'
import questionAnswers from './questionAnswers'
import styles from './styles'
import 'animate.css/animate.css'


const Graph = (props) => {
  const { classes, setAnswers, setCurrentScreen } = props

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
  const [showDragMessage, setShowDragMessage] = useState(false)
  const [dottedLineLabels, setDottedLineLabels] = useState(false)

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
      setAnswers((prevAnswers) => [...prevAnswers, answeredCorrectly])
    whatWasMoved()
  }, [moved])

  const modalOpen = () => setOpen(true);

  const modalClose = () => {
    setOpen(false);
    setResetGraph(false)
  };

  const resetPosition = () => setResetGraph(true)

  const handleSubmit = () => {
    setAnimationClass1('')
    setSubmitted(true)
    questionAnswers[questionIndex].answer.includes('goes') && setTimeout(() => setDottedLineLabels(true), 1000)
    setShowBreakingNews(false)
  }

  const isQuizCompleted = () => {
    if(!(questionIndex + 1 < questionAnswers.length))
      setCurrentScreen("Result")
  }

  const nextQuestion = () => {
    setHideQuestionBeforeAnimation(true)
    isQuizCompleted()
    setQuestionIndex(questionIndex + 1)
    setAnsweredCorrectly(null)
    setSubmitted(false)
    setDottedLineLabels(false)
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
        setAnswerMessage("You we're right to move the point, but you did it in the wrong direction.")
        return
      case "line moved opposite":
        setAnswerImage(NotQuiteIcon)
        setAnswerMessage("You were right to shift the curve, but you did it in the wrong direction.")
        return
    }
  }

  return (
    <Grid container alignItems="center" direction="column">
      <Grid container item justify='center' alignItems='center'>
        <Grid style={{ marginRight: "100px" }}>
          <Typography variant="h5" align='right' className={[classes.questionTitle, animationClass1]}>{questionAnswers[questionIndex].title}</Typography>
          <div className={classes.graphDiv}>
            <Grid container justify='center' style={{maxWidth: '520px'}}>
              <Grid className={classes.graphLines}>
                {showDragMessage && <img src={dragLine} className={`${classes.dragLineMessage} animate__animated animate__bounceIn`}></img>}
                <img src={price} className={classes.graphYLable}></img>
                {dottedLineLabels &&
                  <span className="animate__animated animate__fadeIn">
                    <Typography className={classes.graphP1Lable}>P1</Typography>
                    <Typography className={classes.graphP2Lable} style={{ top: questionAnswers[questionIndex].answer.includes('down') ? '70px' : '203px' }}>P2</Typography>

                    <Typography className={classes.graphQ1Lable}>Q1</Typography>
                    <Typography className={classes.graphQ2Lable} style={{ left: questionAnswers[questionIndex].answer.includes('down') ? '153px' : '288' }}>Q2</Typography>
                  </span>
                }
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
                  setShowDragMessage={setShowDragMessage}
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
                <img src={questionAnswers[questionIndex].icon} className={classes.circleIcon}></img>
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
              <Typography variant='h5' className={classes.QuestionTextAgain}>
                Q. {questionAnswers[questionIndex].question}
                <br/>
                {questionAnswers[questionIndex].subQuestion}
              </Typography>
              <img src={answerImage} width="200px" />
              <Typography variant='h4' className={classes.curveShiftingText}>
                { !questionAnswers[questionIndex].answer.includes('Nothing') && (questionAnswers[questionIndex].answer.includes('shifts') ? 'Demand curve ' : 'Quantity demanded ')}
                {questionAnswers[questionIndex].answer}
              </Typography>
              <Typography variant='h5' className={classes.briefNess}>
                {questionAnswers[questionIndex].briefness}
              </Typography>
            </Grid>
          : <Grid className={classes.answerContainer}>
              <Typography variant='h5' className={classes.QuestionTextAgain}>
                Q. {questionAnswers[questionIndex].question}
                <br/>
                {questionAnswers[questionIndex].subQuestion}
              </Typography>
              <img src={answerImage} width="200px" />
              <Typography variant='h4' className={classes.curveShiftingText}>
                { !questionAnswers[questionIndex].answer.includes('Nothing') && (questionAnswers[questionIndex].answer.includes('shifts') ? 'Demand curve ' : 'Quantity demanded ')}
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
        onClick={resetPosition}
        style={{ cursor: "pointer" }}
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
