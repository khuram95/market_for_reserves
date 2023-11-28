import React, { useState, useEffect, useLayoutEffect } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { withStyles } from '@material-ui/core/styles'
import leftArrow from "../../../../../images/leftArrow.svg";
import rightArrow from "../../../../../images/rightArrow.svg";
// import dGreen from "../../../../../images/equalibriumIcons/d-green.svg";
import dBlue from "../../../../../images/equalibriumIcons/D-blue.svg";
import dBar from "../../../../../images/D-bar.svg";
import D1 from "../../../../../images/equalibriumIcons/D1.svg";
import D2 from "../../../../../images/equalibriumIcons/D2.svg";
import upArrow from "../../../../../images/upArrow.svg";
import downArrow from "../../../../../images/downArrow.svg";
import styles from "../demandStyles";
import "animate.css/animate.css";
import Labels from "../Labels";

let initialDotPosition
let moveXAxisCount = 0

const DemandCurve = (props) => {
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
  const heightOfLine = 400
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
          setCorrectPosition(-70)
          break;
        case "Demand curve shifts right":
          setShowLine(true)
          setCorrectPosition(70)
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
        setArrowPosition({ top: dotCenterPosition - 60, left: -110 })
        break;
      case "Demand curve shifts right":
        setArrowPosition({ top: dotCenterPosition + 55, left: 75 })
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
        setCorrectPosition(-70)
        break;
      case "shifts right":
        setShowLine(true)
        setCorrectPosition(70)
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
        setCorrectPosition(-70)
        setMoved("moved demand curve but in opposite")
        setColors()
        break;
      case "Demand curve shifts right":
        setShowLine(true)
        setCorrectPosition(70)
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
        setLinePosition({ x:  -70, y: 0})
        break;
      case "Demand curve shifts right":
        setLinePosition({ x:  70, y: 0})
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

  const lineMovedOrNotAnswered = () => {
    if (answeredCorrectly === null)
      return true
    if (answeredCorrectly === false)
      return false
    if (answer.includes("Supply curve"))
      return true
    if (linePosition.x !== 0 && answeredCorrectly)
      return true

    return false
  }

  const showIconDefaultLine = () => {
    if (answer.includes("Nothing"))
      return dBlue
    if (answeredCorrectly === false && answer.includes("Supply curve"))
      return dBlue
    if (answeredCorrectly === false && answer.includes("Demand curve"))
      return D1
    if (answeredCorrectly === true && answer.includes("Supply curve"))
      return dBlue
    return D1
  }

  const p2ToOrigin = () => 178
  const p1ToCorrect = () => answer.includes('shifts right') ? 108 : 248
  const q2ToCorrect = () => answer.includes('shifts right') ? "265px" : '195px'
  const q1ToOrigin = () => '230px'
  const qTop = () => '330px'

  return (
    <div>
      {showDottedLines &&
        <Labels
          p2Top={p2ToOrigin()}
          p1Top={p1ToCorrect()}
          originP={{ top: p2ToOrigin(), left: "248px" }}
          originCorrectP={{
            top: p1ToCorrect(),
            left: answer.includes('shifts right') ? "250px" : '248px'
          }}
          q1={{ top: qTop(), left: q1ToOrigin() }}
          q2={{ top: qTop(), left: q2ToCorrect() }}
          originQ={{ top: dotCenterPosition - 38, left: q1ToOrigin(), }}
          dotCorrectQ={{
            top: answer.includes('shifts right') ? (dotCenterPosition - 60) : (dotCenterPosition + 10),
            left: q2ToCorrect()
          }}
          isMobile={false}
          isEmulator={false}
          answer={answer}
        />}
      <div className={classes.verticalLinesContainer} style={{ zIndex: answeredCorrectly !== null && answer.includes("Demand") ? "1" : "0" }}>
        <div className={arrowFadeIn}>
          <img src={arrowIcon} className={classes.arrows} style={{ top: arrowPosition.top, left: arrowPosition.left }}></img>
        </div>
        <div className={classes.defaultLine} >
          {!(answeredCorrectly === null) && <img src={showIconDefaultLine()} className={classes.lineIcon} />}
        </div>
        <div className={classes.correctLine} style={{ zIndex: showLine ? '1' : '-1', backgroundColor: wrongPosition ? lineColor : "#508a05", transition: `left ${wrongPosition ? "0s" : "1s"}`, left: wrongPosition ? wrongPosition : correctPosition }}>
          {/* {(showDot && !answeredCorrectly) && <div className={classes.correctDot}
              style={{ opacity: "1", left: "-10px", top: answer.includes("shifts right") ? (dotCenterPosition - 48) : (dotCenterPosition + 50) }}
          />} */}
          {(changeIconColor && !answeredCorrectly) && <img src={D2} className={(changeIconColor && !answeredCorrectly) ? classes.correctLineIcon : classes.lineIcon} />}

        </div>
        <Draggable
          axis="x"
          defaultPosition={{x: 0, y: 0}}
          position={linePosition}
          scale={1}
          bounds={{top: 0, left: -70, right: 70, bottom: 0}}
          onStart={DragStartLine}
          onDrag={DragLine}
          onStop={DragEndLine}
          // disabled={DisasetDisableDemand}
        >
          <div style={{ cursor: !disableDemand && 'pointer' }}>
            <div className={classes.dragableLine} id="draggable_line" style={{backgroundColor: draggableLineColor()}}>
              {/* {(showDot && answeredCorrectly) && <div className={classes.correctDot}
                style={{ opacity: "1", top: answer.includes("shifts right") ? (dotCenterPosition - 48) : (dotCenterPosition + 50) }}
              />} */}
              {lineMovedOrNotAnswered() && <img src={(changeIconColor && answeredCorrectly) ? D2 : dBlue} className={(changeIconColor && answeredCorrectly) ? classes.correctLineIcon : classes.lineIcon} />}
            </div>
          </div>
        </Draggable>
      </div>
    </div>
  )
}

export default withStyles(styles)(DemandCurve)
