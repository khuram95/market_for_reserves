import React, { useState, useEffect, useLayoutEffect } from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import { withStyles } from "@material-ui/core/styles";
import leftArrow from "../../../../../images/leftArrow.svg";
import rightArrow from "../../../../../images/rightArrow.svg";
import sGreen from "../../../../../images/equalibriumIcons/s-green.svg";
import sBlue from "../../../../../images/equalibriumIcons/S-blue.svg";
import S1 from "../../../../../images/equalibriumIcons/S1.svg";
import S2 from "../../../../../images/equalibriumIcons/S2.svg";
import styles from "../supplyStyles";
import "animate.css/animate.css";
import DemandCurve from "../DemandCurve";
import Labels from "../Labels";

const SupplyCurveEmulator = (props) => {
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
  } = props


  //adjust dot center accoring to line
  const heightOfLine = 260
  const dotCenterPosition = (heightOfLine - 30) / 2

  const { answer } = questionAnswer
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 })
  const [correctPosition, setCorrectPosition] = useState(0)
  const [wrongPosition, setWrongPosition] = useState(null)
  const [showLine, setShowLine] = useState(false)
  const [showDot, setShowDot] = useState(false)
  const [changeIconColor, setChangeIconColor] = useState(false)
  const [lineColor, setLineColor] = useState("#1db2d7")
  const [dotBorderColor, setDotBorderColor] = useState("#003e4c")
  const [dotFillColor, setDotFillColor] = useState("#00b1d9")
  const [fadeDot, setFadeDot] = useState("1")
  const [arrowIcon, setArrowIcon] = useState()
  const [arrowFadeIn, setArrowFadeIn] = useState()
  const [arrowPosition, setArrowPosition] = useState({ left: 0, top: 0 })
  const [showDottedLines, setShowDottedLines] = useState(false)
  const [reRender, setReRender] = useState(false)
  // animate__fadeIn
  useEffect(() => {

    if (submitted) {
      if (answer.includes('Nothing')) {
        if(nothingMove()) {
          setAnsweredCorrectly(true)
          setMoved("correct")
        } else {
          console.log("somthing moved")
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
      answer.includes("Supply curve") && setChangeIconColor(true)
      setTimeout(() => {
        if (answer.includes("Supply curve")) {
          setShowDottedLines(true)
          setShowDot(true)
        }
      }, 1000)
    }
  }, [submitted])

  useEffect(() => {
    if (answeredCorrectly === false && disableSupply) {
      switch(answer) {
        case "Supply curve shifts left":
          setShowLine(true)
          setCorrectPosition(-45)
          break;
        case "Supply curve shifts right":
          setShowLine(true)
          setCorrectPosition(45)
          break;
      }
      // setAnsweredCorrectly(false)
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
      case "Supply curve shifts left":
        setArrowIcon(leftArrow)
        setArrowPosition({ top: 160, left: -70 })
        break;
      case "Supply curve shifts right":
        setArrowPosition({ top: 60, left: 75 })
        setArrowIcon(rightArrow)
        break;
    }
    setArrowFadeIn('animate__animated animate__fadeIn animate__slow animate__delay-1s')
  }

  const DragStartLine = (event) => {
    console.log("event supply", event)
    if (disableSupply) {
      console.log("supply line was dragged")
      setLinePosition({ x: 0, y: 0 })
      modalOpen()
    }
  }

  const DragLine = (event, ui) => {
    if (disableSupply) {
      console.log("supply line was dragged")
      setLinePosition({x: 0, y: 0})
    } else {
      setFadeDot(0.5)
      setLinePosition({ x:  linePosition.x + ui.deltaX, y: linePosition.y + ui.deltaY})
    }
  }

  const DragEndLine = (event) => {
    setFadeDot(1)
    if (linePosition.x <= 10 && linePosition.x >= -10) {
      setDisableDemand(false)
      setLinePosition({x: 0, y: 0})
    } else {
      setDisableDemand(true)
    }
  }

  const nothingMove = () => !disableDemand && !disableSupply

  const setColors = () => {
    if (disableDemand)
      setLineColor("red")
  }

  const nothingAsWrong = () => {
    setDisableDemand(true)
    setDisableSupply(true)

    switch(answer) {
      case "Supply curve shifts left":
        setShowLine(true)
        setCorrectPosition(-45)
        break;
      case "Supply curve shifts right":
        setShowLine(true)
        setCorrectPosition(45)
        break;
    }
    setMoved("nothing")
    setAnsweredCorrectly(false)
  }

  const markQuestionAsWrong = () => {
    setDisableDemand(true)
    setDisableSupply(true)

    switch(answer) {
      case "Supply curve shifts left":
        setShowLine(true)
        setCorrectPosition(-45)
        !disableSupply && setMoved("moved supply curve but in opposite")
        setColors()
        break;
      case "Supply curve shifts right":
        setShowLine(true)
        setCorrectPosition(45)
        !disableSupply && setMoved("moved supply curve but in opposite")
        setColors()
        break;
      default:
        setColors()
        if (!disableSupply && answer.includes("Demand curve shifts"))
          setMoved("incorrect")
    }
    // setAnsweredCorrectly(false)
  }

  const evaluateLineAnswer = (value) => {

    // if (value <= 10 && value >= -10)
    //   return
    console.log("disableSupply", disableSupply)
    if (disableSupply && answeredCorrectly === false) {
      return markQuestionAsWrong()
    }

    let answerMatched = false

    if (value > 10) {
      // setLinePosition({x: 75, y: 0})
      answerMatched = answer === 'Supply curve shifts right'
    }
    else if (value < -10) {
      // setLinePosition({x: -75, y: 0})
      answerMatched = answer === 'Supply curve shifts left'
    }
    answer.includes('Supply curve shifts') && setFadeDot(0)
    console.log("answerMatched", answerMatched)
    answerMatched ? markQuestionAsCorrect() : markQuestionAsWrong()
  }

  const markQuestionAsCorrect = () => {
    setDisableDemand(true)
    setDisableSupply(true)
    changePosition()
    setAnsweredCorrectly(true)
    // draggableDotColor()
    setMoved("correct")
  }
  const changePosition = () => {
    switch(answer) {
      case "Supply curve shifts left":
        setLinePosition({ x:  -45, y: 0})
        break;
      case "Supply curve shifts right":
        setLinePosition({ x:  45, y: 0})
        break;
      default:
        // code block
    }
  }

  const draggableLineColor = () => {
    if (answeredCorrectly && answer.includes('Supply curve shifts')) {
      return "#508a05"
    }
    return wrongPosition ? "#003E4C" : lineColor
  }

  const lineMovedOrNotAnswered = () => {
    if (answeredCorrectly === null)
      return true
    if (answeredCorrectly === false)
      return false
    if (answer.includes("Demand curve"))
      return true
    if (linePosition.x !== 0 && answeredCorrectly)
      return true

    return false
  }

  const showIconDefaultLine = () => {
    if (answer.includes("Nothing"))
      return sBlue
    if (answeredCorrectly === false && answer.includes("Demand curve"))
      return sBlue
    if (answeredCorrectly === false && answer.includes("Supply curve"))
      return S1
    if (answeredCorrectly === true && answer.includes("Demand curve"))
      return sBlue
    return S1
  }

  const p2ToOrigin = () => dotCenterPosition - 16
  const p1ToCorrect = () => !answer.includes('shifts right') ? (dotCenterPosition - 40) : (dotCenterPosition + 3)
  const q2ToCorrect = () => answer.includes('shifts right') ? "177px" : '131px'
  const q1ToOrigin = () => originXAxis
  const qTop = () => '210px'
  const originXAxis = '153px'

  return (
    <div>
       {showDottedLines &&
          <Labels
            p2Top={p2ToOrigin()}
            p1Top={p1ToCorrect()}
            originP={{ top: p2ToOrigin(), left: originXAxis }}
            originCorrectP={{
              top: p1ToCorrect(),
              left: answer.includes('shifts right') ? "165px" : '119px'
            }}
            q1={{ top: qTop(), left: q1ToOrigin() }}
            q2={{ top: qTop(), left: q2ToCorrect() }}
            originQ={{ top: dotCenterPosition - 20, left: q1ToOrigin() }}
            dotCorrectQ={{
              top: !answer.includes('shifts right') ? (dotCenterPosition - 32) : (dotCenterPosition + 12),
              left: q2ToCorrect()
            }}
            isMobile={false}
            isEmulator={true}
            answer={answer}
        />}
      <div className={classes.verticalLinesContainer}>
        <div className={arrowFadeIn}>
          <img src={arrowIcon} className={classes.arrows} style={{ top: arrowPosition.top, left: arrowPosition.left, transform: answer.includes("shift") ? "rotate(0deg)" : "rotate(90deg)" }}></img>
        </div>
        <div className={classes.defaultLine} >
        {!(answeredCorrectly === null) && <img src={showIconDefaultLine()} className={classes.lineIcon} />}
        </div>
        <div className={classes.correctLine} style={{ zIndex: showLine ? '1' : '-1', backgroundColor: wrongPosition ? lineColor : "#508a05", transition: `left ${wrongPosition ? "0s" : "1s"}`, left: wrongPosition ? wrongPosition : correctPosition }}>
          {(showDot && !answeredCorrectly) && <div className={classes.correctDot}
            style={{ opacity: "1", left: "-9px", top: !answer.includes("shifts right") ? 88 : 150 }}
          />}
          {(changeIconColor && !answeredCorrectly) && <img src={S2} className={classes.lineIcon} />}

        </div>
        <Draggable
          axis="x"
          defaultPosition={{x: 0, y: 0}}
          position={linePosition}
          scale={1}
          bounds={{top: 0, left: -45, right: 45, bottom: 0}}
          onStart={DragStartLine}
          onDrag={DragLine}
          onStop={DragEndLine}
          // disabled={lineDisable}
        >
          <div style={{ cursor: !disableSupply && 'pointer' }}>
            <div className={classes.dragableLine} id="draggable_line" style={{backgroundColor: draggableLineColor()}}>
               {(showDot && answeredCorrectly) && <div className={classes.correctDot}
                style={{ opacity: "1", top: !answer.includes("shifts right") ? 88 : 150 }}
              />}
              {lineMovedOrNotAnswered() && <img src={((changeIconColor && answeredCorrectly)) ? S2 : sBlue} className={classes.lineIcon} />}

            </div>
          </div>
        </Draggable>
      </div>
    </div>
  )
}

export default withStyles(styles)(SupplyCurveEmulator);
