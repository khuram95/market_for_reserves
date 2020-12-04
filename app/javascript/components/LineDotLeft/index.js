import React, { useState, useEffect } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

const LineDotLeft = (props) => {
  const {classes} = props

  const { questionAnswer, setAnsweredCorrectly, answeredCorrectly, setScore, setMoved, submitted } = props

  useEffect(() => {
    if(submitted) {
      if(dotPosition.y === 120) {
        evaluateLineAnswer(linePosition.x)
      } else {
        evaluateDotAnswer(dotPosition.y)
      }
    }
  }, [submitted])

  const { answer } = questionAnswer
  const [dotPosition, setDotPosition] = useState({x: 0, y: 120})
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 })
  const [correctPosition, setCorrectPosition] = useState(0)
  const [wrongPosition, setWrongPosition] = useState(null)
  const [showLine, setShowLine] = useState(false)
  const [showDot, setShowDot] = useState(false)
  const [lineDisable, setLineDisable] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [dotDisable, setDotDisable] = useState(false)
  const [lineColor, setLineColor] = useState("#003E4C")
  const [dotBorderColor, setDotBorderColor] = useState("#003e4c")
  const [dotFillColor, setDotFillColor] = useState("#00b1d9")
  const [fadeDot, setFadeDot] = useState("1")

  const DragStartLine = (event) => {
    console.log("event line", event)
    if (lineDisable) {
      console.log("line was dragged")
      setLinePosition({x: 0, y: 0})
    }
  }

  const DragLine = (event, ui) => {
    if (lineDisable) {
      console.log("line was dragged")
      setLinePosition({x: 0, y: 0})
    } else {
      setFadeDot(0.5)
      setLinePosition({ x:  linePosition.x + ui.deltaX, y: linePosition.y + ui.deltaY})
    }
  }

  const lineOrDotMoved = (position) => {
    if (position == 120) {
      setShowLine(true)
      setWrongPosition(linePosition.x)
      setLineColor("red")
      setMoved("dot but moved line")
    } else {
      setDotBorderColor("#e03616")
      setDotFillColor("#d3968d")
      setMoved("dot moved opposite")
    }
    setShowDot(true)
    setLinePosition({x: 0, y: 0})
  }

  const setColors = () => {
    if (dotPosition.y == 120) {
      setLineColor("red")
      setMoved("line moved opposite")
    } else {
      setLineColor('#2e8599')
      setDotBorderColor("#e03616")
      setDotFillColor("#d3968d")
      setMoved("line but moved dot")
    }
  }

  const markQuestionAsWrong = () => {
    setLineDisable(true)
    setDotDisable(true)

    switch(answer) {
      case "Shift left":
        setShowLine(true)
        setCorrectPosition(-55)
        setColors()
        break;
      case "Shift right":
        setShowLine(true)
        setCorrectPosition(55)
        setColors()
        break;
      case "Dot moves down":
        lineOrDotMoved(dotPosition.y)
        setCorrectPosition(190)
        break;
      case "Dot moves up":
        lineOrDotMoved(dotPosition.y)
        setCorrectPosition(50)
        break;
      default:
        // code block
    }
    setAnsweredCorrectly(false)
  }

  const DragEndLine = (event) => {
    setFadeDot(1)
    if (linePosition.x <= 10 && linePosition.x >= -10) {
      setDotDisable(false)
      setLinePosition({x: 0, y: 0})
    } else {
      setDotDisable(true)
    }
    // evaluateLineAnswer(linePosition.x)
  }

  const DragEndDot = (event) => {
    event.stopPropagation();
    if (dotPosition.y <= 130 && dotPosition.y >= 110) {
      setLineDisable(false)
      setDotPosition({x: 0, y: 120})
    } else {
      setLineDisable(true)
    }
    // evaluateDotAnswer(dotPosition.y)
    

  }

  const evaluateLineAnswer = (value) => {

    if (value <= 10 && value >= -10)
      return

    let answerMatched = false

    if (value > 10) {
      // setLinePosition({x: 75, y: 0})
      answerMatched = answer === 'Shift right'
    }
    else if (value < -10) {
      // setLinePosition({x: -75, y: 0})
      answerMatched = answer === 'Shift left'
    }
    answer.includes('Shift') && setFadeDot(0)
    answerMatched ? markQuestionAsCorrect() : markQuestionAsWrong()
  }

  const evaluateDotAnswer = (value) => {

    if (value <= 130 && value >= 110)
      return

    let answerMatched = false

    if (value > 130) {
      // setDotPosition({x: 0, y: 260})
      answerMatched = answer === 'Dot moves down'
    }
    else if (value < 110) {
      // setDotPosition({x: 0, y: 10})
      answerMatched = answer === 'Dot moves up'
    }

    answerMatched ? markQuestionAsCorrect() : markQuestionAsWrong()
  }

  const markQuestionAsCorrect = () => {
    setLineDisable(true)
    setDotDisable(true)
    setAnsweredCorrectly(true)
    setScore((preScore) => preScore + questionAnswer.score)
  }

  const DragStartDot = (event) => {
    event.stopPropagation();
    console.log("event", event)
  }
  const DragDot = (event, ui) => {
    event.stopPropagation();
    setDotPosition({ x:  dotPosition.x + ui.deltaX, y: dotPosition.y + ui.deltaY})
    console.log("event dragging", dotPosition)
  }

  return (
    <div className={classes.verticalLinesContainer}>
      <div className={classes.defaultLine} />
      <div className={classes.correctLine} style={{ zIndex: showLine ? '1' : '-1', backgroundColor: wrongPosition ? lineColor : "#003E4C", transition: `left ${wrongPosition ? "0s" : "1s"}`, left: wrongPosition ? wrongPosition : correctPosition }}></div>
      <Draggable
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        position={linePosition}
        scale={1}
        bounds={{top: 0, left: -55, right: 55, bottom: 0}}
        onStart={DragStartLine}
        onDrag={DragLine}
        onStop={DragEndLine}
        // disabled={lineDisable}
      >
        <div style={{ cursor: !lineDisable && 'pointer' }}>
          <div className={classes.dragableLine} style={{backgroundColor: wrongPosition ? "#green" : lineColor}}>
            <div className={classes.fadedDot}
              style={{ opacity: fadeDot <= 0.5 ? "0" : "1", zIndex: showDot ? '1' : '0'}}
            />
            {<div className={classes.correctDot}
              style={{ opacity: showDot ? "1" : "0", top: correctPosition || 120, transition: `top 1s` }}
            />}
            <Draggable
              axis="y"
              defaultPosition={{x: 0, y: 120}}
              position={dotPosition}
              scale={1}
              bounds={{top: 50, left: 0, right: 0, bottom: 190}}
              onStart={DragStartDot}
              onDrag={DragDot}
              onStop={DragEndDot}
              // disabled={dotDisable}
            >
              <div style={{height: '40px', cursor: !dotDisable && 'pointer'}}>
                <div className={classes.draggableDot}
                  style={{
                    border: `5px solid ${dotBorderColor}`,
                    opacity: fadeDot,
                    backgroundColor: dotFillColor,
                  }}
                />
              </div>
            </Draggable>
          </div>
        </div>
      </Draggable>
    </div>
  )
}

export default withStyles(styles)(LineDotLeft)
