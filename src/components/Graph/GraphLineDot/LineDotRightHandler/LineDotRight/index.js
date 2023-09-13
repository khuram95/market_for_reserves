import React, { useState, useEffect, useLayoutEffect } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time
import { withStyles } from '@material-ui/core/styles'
import leftArrow from '../../../../../images/leftArrow'
import rightArrow from '../../../../../images/rightArrow'
import upArrow from '../../../../../images/upArrow'
import downArrow from '../../../../../images/downArrow'
import styles from '../styles'
import 'animate.css/animate.css'
import RightLabels from '../RightLabels'

let initialDotPosition
let moveXAxisCount = 0

const LineDotRight = (props) => {
  const { classes } = props

  const {
    questionAnswer,
    answeredCorrectly,
    setAnsweredCorrectly,
    setMoved,
    submitted,
    // resetGraph,
    // modalClose,
    modalOpen,
    setShowDragMessage,
  } = props


  //adjust dot center accoring to line
  const heightOfLine = 400
  const dotCenterPosition = (heightOfLine - 30) / 2

  const { answer } = questionAnswer
  const [dotPosition, setDotPosition] = useState({ x: 0, y: dotCenterPosition })
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 })
  const [correctPosition, setCorrectPosition] = useState(0)
  const [wrongPosition, setWrongPosition] = useState(null)
  const [showLine, setShowLine] = useState(false)
  const [showDot, setShowDot] = useState(false)
  const [lineDisable, setLineDisable] = useState(false)
  const [dotDisable, setDotDisable] = useState(false)
  const [lineColor, setLineColor] = useState("#003E4C")
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
          nothingAsWrong()
        }
      }
      else if (nothingMove()) {
        nothingAsWrong()
      }
      else if (dotPosition.y === dotCenterPosition) {
        evaluateLineAnswer(linePosition.x)
      } else {
        evaluateDotAnswer(dotPosition.y)
      }
      showArrow()
      if (answer.includes('goes')) {
        setTimeout(() => {
          setShowDottedLines(true)
        }, 1000)
      }
    }
  }, [submitted])

  // useEffect(() => {
  //   if (resetGraph) {
  //     console.log('reseting here')
  //     setLinePosition({ x: 0, y: 0 })
  //     setDotPosition({ x: 0, y: dotCenterPosition })
  //     setLineDisable(false)
  //     setDotDisable(false)
  //     modalClose()
  //   }
  // }, [resetGraph])


  window.addEventListener("resize", () => setTimeout(() => {
    setReRender(!reRender)
    return window.removeEventListener("resize", () => {
    })
  }, 250));

  const showArrow = () => {
    switch (answer) {
      case "shifts left":
        setArrowIcon(leftArrow)
        setArrowPosition({ top: dotCenterPosition, left: -56 })
        break;
      case "shifts right":
        setArrowPosition({ top: dotCenterPosition, left: 20 })
        setArrowIcon(rightArrow)
        break;
      case "goes down":
        setArrowIcon(downArrow)
        setArrowPosition({ top: dotCenterPosition + 50, left: -33 })
        break;
      case "goes up":
        setArrowIcon(upArrow)
        setArrowPosition({ top: dotCenterPosition - 40, left: -20 })
        break;
    }
    setArrowFadeIn('animate__animated animate__fadeIn animate__slow animate__delay-1s')
  }

  const DragStartLine = (event) => {
    console.log("event line", event)
    if (lineDisable) {
      console.log("line was dragged")
      setLinePosition({ x: 0, y: 0 })
      modalOpen()
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

  const nothingMove = () => {
    return dotPosition.y === dotCenterPosition && linePosition.x === 0
  }

  const lineOrDotMoved = (position) => {
    if (position == dotCenterPosition) {
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
    if (dotPosition.y == dotCenterPosition) {
      setLineColor("red")
      setMoved("line moved opposite")
    } else {
      // setLineColor('#2e8599')
      setDotBorderColor("#e03616")
      setDotFillColor("#d3968d")
      setMoved("line but moved dot")
    }
  }

  const nothingAsWrong = () => {
    setLineDisable(true)
    setDotDisable(true)

    switch(answer) {
      case "shifts left":
        setShowLine(true)
        setCorrectPosition(-70)
        break;
      case "shifts right":
        setShowLine(true)
        setCorrectPosition(70)
        break;
      case "goes down":
        setShowDot(true)
        setCorrectPosition(dotCenterPosition + dotCenterPosition/2)
        break;
      case "goes up":
        setShowDot(true)
        setCorrectPosition(dotCenterPosition - dotCenterPosition/2)
        break;
    }
    setMoved("nothing")
    setAnsweredCorrectly(false)
  }

  const markQuestionAsWrong = () => {
    setLineDisable(true)
    setDotDisable(true)

    switch(answer) {
      case "shifts left":
        setShowLine(true)
        setCorrectPosition(-70)
        setColors()
        break;
      case "shifts right":
        setShowLine(true)
        setCorrectPosition(70)
        setColors()
        break;
      case "goes down":
        lineOrDotMoved(dotPosition.y)
        setCorrectPosition(dotCenterPosition + dotCenterPosition/2)
        break;
      case "goes up":
        lineOrDotMoved(dotPosition.y)
        setCorrectPosition(dotCenterPosition - dotCenterPosition/2)
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
    if (dotPosition.y <= dotCenterPosition + 10 && dotPosition.y >= dotCenterPosition -10) {
      setLineDisable(false)
      setDotPosition({x: 0, y: dotCenterPosition})
    } else {
      setLineDisable(true)
    }
    // evaluateDotAnswer(dotPosition.y)
    checkifDotMovedXAxis(event.pageX, event.pageY)


  }

  const evaluateLineAnswer = (value) => {

    if (value <= 10 && value >= -10)
      return

    let answerMatched = false

    if (value > 10) {
      // setLinePosition({x: 75, y: 0})
      answerMatched = answer === 'shifts right'
    }
    else if (value < -10) {
      // setLinePosition({x: -75, y: 0})
      answerMatched = answer === 'shifts left'
    }
    answer.includes('shifts') && setFadeDot(0)
    answerMatched ? markQuestionAsCorrect() : markQuestionAsWrong()
  }

  const evaluateDotAnswer = (value) => {

    if (value <= dotCenterPosition + 10 && value >= dotCenterPosition -10)
      return

    let answerMatched = false

    if (value > dotCenterPosition + 10) {
      // setDotPosition({x: 0, y: 260})
      answerMatched = answer === 'goes down'
    }
    else if (value < dotCenterPosition - 10) {
      // setDotPosition({x: 0, y: 10})
      answerMatched = answer === 'goes up'
    }

    answerMatched ? markQuestionAsCorrect() : markQuestionAsWrong()
  }

  const markQuestionAsCorrect = () => {
    setLineDisable(true)
    setDotDisable(true)
    changePosition()
    setAnsweredCorrectly(true)
    draggableDotColor()
    setMoved("correct")
  }
  const changePosition = () => {
    switch(answer) {
      case "shifts left":
        setLinePosition({ x:  -70, y: 0})
        break;
      case "shifts right":
        setLinePosition({ x:  70, y: 0})
        break;
      case "goes down":
        setDotPosition({x: 0, y: dotCenterPosition + (dotCenterPosition/2)})
        break;
      case "goes up":
        setDotPosition({x: 0, y: dotCenterPosition - (dotCenterPosition/2)})
        break;
      default:
        // code block
    }
  }

  const DragStartDot = (event) => {
    event.stopPropagation();
    initialDotPosition = {x: event.pageX, y: event.pageY}
    if (dotDisable) {
      setDotPosition({ x: 0, y: dotCenterPosition })
      modalOpen()
    }
  }

  const DragDot = (event, ui) => {
    event.stopPropagation();
    if (dotDisable) {
      setDotPosition({ x: 0, y: dotCenterPosition })
    } else {
      setDotPosition({ x:  dotPosition.x + ui.deltaX, y: dotPosition.y + ui.deltaY})
    }

  }

  const checkifDotMovedXAxis = (x, y) => {
    if (y > (initialDotPosition.y + 10) || y < initialDotPosition.y - 10)
      return;

    if (x > (initialDotPosition.x + 30) || x < initialDotPosition.x - 30) {
      // if (moveXAxisCount >= 1) {
        setShowDragMessage(true)
        setTimeout(() => setShowDragMessage(false), 4000)
      //   moveXAxisCount=0
      // } else {
      //   moveXAxisCount+=1
      // }
    }
  }

  const draggableLineColor = () => {
    if (answeredCorrectly && answer.includes('shifts')) {
      return "#508a05"
    }
    return wrongPosition ? "#003E4C" : lineColor
  }

  const draggableDotColor = () => {
    if (answer.includes('goes')) {
      setDotFillColor('#508a05')
      // return "#508a05"
    }
    // return wrongPosition ? "#003E4C" : lineColor
  }

  const p2ToOrigin = () => dotCenterPosition - 34
  const p1ToCorrect = () => answer.includes('up') ? (dotCenterPosition - 98) : (dotCenterPosition + 31)
  const q2ToCorrect = () => answer.includes('up') ? "295px" : '165px'
  const q1ToOrigin = () => '230px'
  const qTop = () => '330px'

  return (
    <div>
       {showDottedLines &&
          <RightLabels
            p2Top={p2ToOrigin()}
            p1Top={p1ToCorrect()}
            originP={{ top: p2ToOrigin(), left: "215px" }}
            originCorrectP={{
              top: p1ToCorrect(),
              left: answer.includes('up') ? "280px" : '150px'
            }}
            q1={{ top: qTop(), left: q1ToOrigin() }}
            q2={{ top: qTop(), left: q2ToCorrect() }}
            originQ={{ top: dotCenterPosition - 25, left: q1ToOrigin(), }}
            dotCorrectQ={{
              top: answer.includes('up') ? (dotCenterPosition - 90) : (dotCenterPosition + 40),
              left: q2ToCorrect()
            }}
            isMobile={false}
            isEmulator={false}
            answer={answer}
        />}
      <div className={classes.verticalLinesContainer}>
        <div className={arrowFadeIn}>
          <img src={arrowIcon} className={classes.arrows} style={{ top: arrowPosition.top, left: arrowPosition.left, transform: answer.includes("shift") ? "rotate(0deg)" : "rotate(90deg)" }}></img>
        </div>
        <div className={classes.defaultLine} />
        <div className={classes.correctLine} style={{ zIndex: showLine ? '1' : '-1', backgroundColor: wrongPosition ? lineColor : "#508a05", transition: `left ${wrongPosition ? "0s" : "1s"}`, left: wrongPosition ? wrongPosition : correctPosition }}></div>
        <Draggable
          axis="x"
          defaultPosition={{x: 0, y: 0}}
          position={linePosition}
          scale={1}
          bounds={{top: 0, left: -70, right: 70, bottom: 0}}
          onStart={DragStartLine}
          onDrag={DragLine}
          onStop={DragEndLine}
          // disabled={lineDisable}
        >
          <div style={{ cursor: !lineDisable && 'pointer' }}>
            <div className={classes.dragableLine} id="draggable_line" style={{backgroundColor: draggableLineColor()}}>
              <div className={classes.fadedDot}
                style={{ opacity: fadeDot <= 0.5 ? "0" : "1", zIndex: showDot ? '1' : '0', top: dotCenterPosition}}
              />
              {<div className={classes.correctDot}
                style={{ opacity: showDot ? "1" : "0", top: correctPosition || dotCenterPosition, transition: `top 1s` }}
              />}
              <Draggable
                axis="y"
                defaultPosition={{ x: 0, y: dotCenterPosition }}
                position={dotPosition}
                scale={1}
                bounds={{
                  top: dotCenterPosition - (dotCenterPosition / 2),
                  left: 0,
                  right: 0,
                  bottom: dotCenterPosition + (dotCenterPosition / 2)
                }}
                onStart={DragStartDot}
                onDrag={DragDot}
                onStop={DragEndDot}
                // disabled={dotDisable}
              >
                <div style={{height: '40px', cursor: !dotDisable && 'pointer'}}>
                  <div className={[classes.draggableDot]}
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
    </div>
  )
}

export default withStyles(styles)(LineDotRight)
