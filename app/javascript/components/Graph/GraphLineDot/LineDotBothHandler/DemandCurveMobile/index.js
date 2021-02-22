import React, { useState, useEffect, useLayoutEffect } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { withStyles } from '@material-ui/core/styles'
import leftArrow from 'images/leftArrow'
import rightArrow from 'images/rightArrow'
import dGreen from 'images/equalibriumIcons/d-green.svg'
import dBlue from 'images/equalibriumIcons/D-blue.svg'
import D1 from 'images/equalibriumIcons/D1.svg'
import D2 from 'images/equalibriumIcons/D2.svg'
import upArrow from 'images/upArrow'
import downArrow from 'images/downArrow'
import styles from '../demandStyles'
import 'animate.css/animate.css'
import Labels from '../Labels';

let initialDotPosition
let moveXAxisCount = 0

const DemandCurveMobile = (props) => {
  const { classes } = props

  const {
    questionAnswer,
    answeredCorrectly,
    setAnsweredCorrectly,
    setMoved,
    submitted,
    disableSupply,
    setDisableSupply,
    disableDemand,
    setDisableDemand,
    modalOpen,
    setShowDragMessage,
  } = props


  //adjust dot center accoring to line
  const heightOfLine = 190
  const dotCenterPosition = (heightOfLine - 30) / 2

  const { answer } = questionAnswer
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 })
  const [correctPosition, setCorrectPosition] = useState(0)
  const [wrongPosition, setWrongPosition] = useState(null)
  const [showLine, setShowLine] = useState(false)
  const [showDot, setShowDot] = useState(false)
  const [changeIconColor, setChangeIconColor] = useState(false)
  const [lineColor, setLineColor] = useState("#003E4C")
  const [arrowIcon, setArrowIcon] = useState()
  const [arrowFadeIn, setArrowFadeIn] = useState()
  const [arrowPosition, setArrowPosition] = useState({ left: 0, top: 0 })
  const [showDottedLines, setShowDottedLines] = useState(false)
  const [reRender, setReRender] = useState(false)
  // animate__fadeIn
  useEffect(() => {
    if (submitted ) {
      if (answer.includes('Nothing')) {
        if (nothingMove()) {
          setAnsweredCorrectly(true)
          setMoved("correct")
        } else {
          setColors()
          nothingAsWrong()
        }
      }
      else if (nothingMove()) {
        nothingAsWrong()
      }
      else {
        evaluateLineAnswer(linePosition.x)
      }
      showArrow()
      answer.includes("Demand curve") && setChangeIconColor(true)
      setTimeout(() => {
        if (answer.includes("Demand curve")) {
          setShowDottedLines(true)
          setShowDot(true)
        }
      }, 1000)
    }
  }, [submitted])

  useEffect(() => {
    if (answeredCorrectly === false && disableDemand) {
      switch(answer) {
        case "Demand curve shifts left":
          setShowLine(true)
          setCorrectPosition(-30)
          break;
        case "Demand curve shifts right":
          setShowLine(true)
          setCorrectPosition(30)
          break;
      }
      setAnsweredCorrectly(false)
      return
    }
  },[answeredCorrectly])

  window.addEventListener("resize", () => setTimeout(() => {
    setReRender(!reRender)
    return window.removeEventListener("resize", () => {
    })
  }, 250));

  const showArrow = () => {
    switch (answer) {
      case "Demand curve shifts left":
        setArrowIcon(leftArrow)
        setArrowPosition({ top: 55, left: -54 })
        break;
      case "Demand curve shifts right":
        setArrowPosition({ top: 122, left: 43 })
        setArrowIcon(rightArrow)
        break;
    }
    setArrowFadeIn('animate__animated animate__fadeIn animate__slow animate__delay-1s')
  }

  const DragStartLine = (event) => {
    console.log("event demand", event)
    if (disableDemand) {
      console.log("demand line was dragged")
      setLinePosition({ x: 0, y: 0 })
      modalOpen()
    }
  }

  const DragLine = (event, ui) => {
    if (disableDemand) {
      console.log("demand line was dragged")
      setLinePosition({x: 0, y: 0})
    } else {
      setLinePosition({ x: linePosition.x + ui.deltaX, y: linePosition.y + ui.deltaY })
    }
  }

  const nothingMove = () => !disableDemand && !disableSupply

  const setColors = () => {
    if (disableSupply)
      setLineColor("red")
  }

  const nothingAsWrong = () => {
    setDisableDemand(true)
    setDisableSupply(true)

    switch(answer) {
      case "shifts left":
        setShowLine(true)
        setCorrectPosition(-30)
        break;
      case "shifts right":
        setShowLine(true)
        setCorrectPosition(30)
        break;
    }
    setMoved("nothing")
    setAnsweredCorrectly(false)
  }

  const markQuestionAsWrong = () => {
    setDisableDemand(true)
    setDisableSupply(true)

    switch (answer) {
      case "Demand curve shifts left":
        setShowLine(true)
        setCorrectPosition(-30)
        setMoved("moved demand curve but in opposite")
        setColors()
        break;
      case "Demand curve shifts right":
        setShowLine(true)
        setCorrectPosition(30)
        setMoved("moved demand curve but in opposite")
        setColors()
        break;
      default:
        setColors()
        answer.includes("Supply curve shifts") &&  setMoved("incorrect")
    }
    setAnsweredCorrectly(false)
  }

  const DragEndLine = (event) => {
    if (linePosition.x <= 10 && linePosition.x >= -10) {
      setDisableSupply(false)
      setLinePosition({x: 0, y: 0})
    } else {
      setDisableSupply(true)
    }
  }

  const evaluateLineAnswer = (value) => {

    console.log("evaluator called")

    // if (value <= 10 && value >= -10)
    //   return

    let answerMatched = false

    if (value > 10) {
      // setLinePosition({x: 75, y: 0})
      answerMatched = answer === 'Demand curve shifts right'
    }
    else if (value < -10) {
      // setLinePosition({x: -75, y: 0})
      answerMatched = answer === 'Demand curve shifts left'
    }

    console.log("evaluator called", answerMatched)
    answerMatched ? markQuestionAsCorrect() : markQuestionAsWrong()
  }

  const markQuestionAsCorrect = () => {
    setDisableDemand(true)
    setDisableSupply(true)
    changePosition()
    setAnsweredCorrectly(true)
    setMoved("correct")
  }
  const changePosition = () => {

    switch(answer) {
      case "Demand curve shifts left":
        setLinePosition({ x:  -30, y: 0})
        break;
      case "Demand curve shifts right":
        setLinePosition({ x:  30, y: 0})
        break;
      default:
        // code block
    }
  }

  const draggableLineColor = () => {
    if (answeredCorrectly && answer.includes('Demand curve shifts')) {
      return "#508a05"
    }
    return wrongPosition ? "#003E4C" : lineColor
  }

  const p2ToOrigin = () => dotCenterPosition - 8
  const p1ToCorrect = () => answer.includes('shifts right') ? (dotCenterPosition - 24) : (dotCenterPosition + 9)
  const q2ToCorrect = () => answer.includes('shifts right') ? "120px" : '90px'
  const q1ToOrigin = () => originXAxis
  const qTop = () => '150px'
  const originXAxis = '104px'

  return (
    <div>
      {showDottedLines &&
        <Labels
          p2Top={p2ToOrigin()}
          p1Top={p1ToCorrect()}
          originP={{ top: p2ToOrigin(), left: originXAxis }}
          originCorrectP={{
            top: p1ToCorrect(),
            left: answer.includes('shifts right') ? "110px" : '80px'
          }}
          q1={{ top: qTop(), left: q1ToOrigin() }}
          q2={{ top: qTop(), left: q2ToCorrect() }}
          originQ={{ top: dotCenterPosition - 10, left: q1ToOrigin() }}
          dotCorrectQ={{
            top: answer.includes('shifts right') ? (dotCenterPosition - 18) : (dotCenterPosition + 12),
            left: q2ToCorrect()
          }}
          isMobile={true}
          isEmulator={false}
          answer={answer}
        />}
      <div className={classes.verticalLinesContainer} style={{ zIndex: answeredCorrectly !== null && answer.includes("Demand") ? "1" : "0" }}>
        <div className={arrowFadeIn}>
          <img src={arrowIcon} className={classes.arrows} style={{ top: arrowPosition.top, left: arrowPosition.left }}></img>
        </div>
        <div className={classes.defaultLine} >
          {changeIconColor && answeredCorrectly && <img src={D1} className={classes.lineIcon} />}
        </div>
        <div className={classes.correctLine} style={{ zIndex: showLine ? '1' : '-1', backgroundColor: wrongPosition ? lineColor : "#508a05", transition: `left ${wrongPosition ? "0s" : "1s"}`, left: wrongPosition ? wrongPosition : correctPosition }}>
          {(showDot && !answeredCorrectly) && <div className={classes.correctDot}
              style={{ opacity: "1", left: "-6px", top: answer.includes("shifts right") ? 63 : 106 }}
          />}
          {(changeIconColor && !answeredCorrectly) && <img src={D2} className={(changeIconColor && !answeredCorrectly) ? classes.correctLineIcon : classes.lineIcon} />}

        </div>
        <Draggable
          axis="x"
          defaultPosition={{x: 0, y: 0}}
          position={linePosition}
          scale={1}
          bounds={{top: 0, left: -30, right: 30, bottom: 0}}
          onStart={DragStartLine}
          onDrag={DragLine}
          onStop={DragEndLine}
          // disabled={DisasetDisableDemand}
        >
          <div style={{ cursor: !disableDemand && 'pointer' }}>
            <div className={classes.dragableLine} id="draggable_line" style={{backgroundColor: draggableLineColor()}}>
              {(showDot && answeredCorrectly) && <div className={classes.correctDot}
                style={{ opacity: "1", top: answer.includes("shifts right") ? 63 : 106 }}
              />}
              <img src={((changeIconColor && answeredCorrectly)) ? D2 : dBlue} className={(changeIconColor && answeredCorrectly) ? classes.correctLineIcon : classes.lineIcon} />
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  )
}

export default withStyles(styles)(DemandCurveMobile)
