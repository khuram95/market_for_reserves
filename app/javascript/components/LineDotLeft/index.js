import React, { useState } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


const LineDotLeft = (props) => {

  const { questionAnswer, setAnsweredCorrectly, answeredCorrectly, setScore, setMoved } = props
  const { answer } = questionAnswer
  const [dotPosition, setDotPosition] = useState({x: 0, y: 135})
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 })
  const [correctPosition, setCorrectPosition] = useState(null)
  const [wrongPosition, setWrongPosition] = useState(null)
  const [showLine, setShowLine] = useState(false)
  const [showDot, setShowDot] = useState(false)
  const [disable, setDisable] = useState(false)
  const [lineColor, setLineColor] = useState("#003E4C")
  const [dotBorderColor, setDotBorderColor] = useState("#003e4c")
  const [dotFillColor, setDotFillColor] = useState("#00b1d9")
  const [fadeDot, setFadeDot] = useState("1")

  const DragStartLine = (event) => {
    // console.log("event line", event)
  }

  const DragLine = (event, ui) => {
    setFadeDot(0.5)
    setLinePosition({ x:  linePosition.x + ui.deltaX, y: linePosition.y + ui.deltaY})
  }

  const lineOrDotMoved = (position) => {
    if (position == 135) {
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
    if (dotPosition.y == 135) {
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
    setDisable(true)
    switch(answer) {
      case "Shift left":
        setShowLine(true)
        setCorrectPosition(-75)
        setColors()
        break;
      case "Shift right":
        setShowLine(true)
        setCorrectPosition(75)
        setColors()
        break;
      case "Dot moves down":
        lineOrDotMoved(dotPosition.y)
        setCorrectPosition(260)
        break;
      case "Dot moves up":
        lineOrDotMoved(dotPosition.y)
        setCorrectPosition(10)
        break;
      default:
        // code block
    }
    setAnsweredCorrectly(false)
  }

  const DragEndLine = (event) => {
    setFadeDot(1)
    evaluateLineAnswer(linePosition.x)
  }

  const DragEndDot = (event) => {
    event.stopPropagation();
    evaluateDotAnswer(dotPosition.y)
  }

  const evaluateLineAnswer = (value) => {

    if (value <= 10 && value >= -10)
      return

    let answerMatched = false

    if (value > 10) {
      setLinePosition({x: 75, y: 0})
      answerMatched = answer === 'Shift right'
    }
    else if (value < -10) {
      setLinePosition({x: -75, y: 0})
      answerMatched = answer === 'Shift left'
    }
    answer.includes('Shift') && setFadeDot(0)
    answerMatched ? markQuestionAsCorrect() : markQuestionAsWrong()
  }

  const evaluateDotAnswer = (value) => {

    if (value <= 135 && value >= 115)
      return

    let answerMatched = false

    if (value > 135) {
      setDotPosition({x: 0, y: 260})
      answerMatched = answer === 'Dot moves down'
    }
    else if (value < 115) {
      setDotPosition({x: 0, y: 10})
      answerMatched = answer === 'Dot moves up'
    }

    answerMatched ? markQuestionAsCorrect() : markQuestionAsWrong()
  }

  const markQuestionAsCorrect = () => {
    setDisable(true)
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
    <div style={{ transform: "rotate(-45deg)", position: "absolute", top: "80px", left: "160px" }} >
      <div style={{ position: 'absolute', height: "300px", width: "5px", backgroundColor: "#2e8599", borderRadius: '5px'}}></div>
      {showLine && <div style={{ position: 'absolute', height: "300px", width: "5px", backgroundColor: wrongPosition ? lineColor : "#003E4C", borderRadius: '5px', left: wrongPosition || correctPosition }}></div>}
      <Draggable
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        position={answeredCorrectly != null ? linePosition : null}
        scale={1}
        bounds={{top: 0, left: -75, right: 75, bottom: 0}}
        onStart={DragStartLine}
        onDrag={DragLine}
        onStop={DragEndLine}
        disabled={disable}
      >
      <div style={{display: "flex", justifyContent: "center", height: "300px", width: "5px", backgroundColor: wrongPosition ? "#green" : lineColor, position: "relative", borderRadius: '5px'}}>
        <div
          style={{
            position: "absolute",
            transform: "rotate(45deg)",
            border: "5px solid #003E4C",
            borderRadius: "50%",
            padding: "10px",
            opacity: fadeDot <= 0.5 ? "0" : "1",
            backgroundColor: "#003E4C",
            top: '135px',
            color: "blue",
          }}
          />
          {showDot && <div
          style={{
            position: "absolute",
            transform: "rotate(45deg)",
            border: "5px solid #003e4c",
            borderRadius: "50%",
            padding: "10px",
            backgroundColor: "#00b1d9",
            color: "blue",
            top: correctPosition
          }}
          />}
        <Draggable
          axis="y"
          defaultPosition={{x: 0, y: 135}}
          position={answeredCorrectly != null ? dotPosition : null}
          scale={1}
          bounds={{top: 5, left: 0, right: 0, bottom: 250}}
          onStart={DragStartDot}
          onDrag={DragDot}
          onStop={DragEndDot}
          disabled={disable}
        >
          <div style={{height: '40px'}}>
            <div
              style={{
                transform: "rotate(45deg)",
                border: `5px solid ${dotBorderColor}`,
                borderRadius: "50%",
                padding: "10px",
                opacity: fadeDot,
                backgroundColor: dotFillColor,
                color: "blue"
              }}
            />
          </div>
        </Draggable>
      </div>
      </Draggable>
    </div>
  )
}

export default LineDotLeft
