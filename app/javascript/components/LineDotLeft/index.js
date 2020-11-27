import React, { useState } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


const LineDotLeft = (props) => {

  const { questionAnswer, setAnsweredCorrectly, answeredCorrectly, setScore } = props
  const { answer } = questionAnswer
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 })
  const [correctPostion, setCorrectPostion] = useState({ x: 0, y: 0 })
  const [disable, setDisable] = useState(false)

  const DragStartLine = (event) => {
    console.log("event line", event)
  }

  const DragLine = (event, ui) => {
    console.log("event dragging line", event)
    setLinePosition({ x:  linePosition.x + ui.deltaX, y: linePosition.y + ui.deltaY})
    console.log("event dragging", linePosition)
  }

  const markQuestionAsWrong = (value) => {
    if (answer.includes('Shift')){
      // setLinePosition(value > 10 ? { x: 75, y: 0 } : { x: -75, y: 0 })
      setDotPosition({ x: 0, y: 0 })
      answer.includes('right') ? setCorrectPostion(75) : setCorrectPostion(-75)
    } else {
      // setDotPosition(value > 10 ? { x: 0, y: 75 } : { x: 0, y: -75 })
      // setLinePosition({ x: 0, y: 0 })
      answer.includes('down') ? setCorrectPostion(260) : setCorrectPostion(25)
    }
    setAnsweredCorrectly(false)
    // setScore((preScore) => preScore + questionAnswer.score)
  }

  const DragEndLine = (event) => {
    evaluateLineAnswer(linePosition.x)
  }

  const DragEndDot = (event) => {
    event.stopPropagation();
    evaluateDotAnswer(dotPosition.y)
  }

  const evaluateLineAnswer = (value) => {
    if (value <= 10 && value >= -10) return

    if (value > 10 && answer === 'Shift right')
      return markQuestionAsCorrect(75, 0, true)
    else if (value < -10 && answer === 'Shift left')
      return markQuestionAsCorrect(-75, 0, true)
    setDisable(true)
    markQuestionAsWrong(linePosition.x)
    // setLinePosition(value > 10 ? { x: 75, y: 0 } : { x: -75, y: 0 })
    // setAnsweredCorrectly(false)
  }

  const evaluateDotAnswer = (value) => {
    if (value <= 10 && value >= -10) return

    if (value > 10 && answer === 'Dot moves down')
      return markQuestionAsCorrect(0, 260, false)
    else if (value < -10 && answer === 'Dot moves up')
      return markQuestionAsCorrect(0, 25, false)
    setDisable(true)
    markQuestionAsWrong(dotPosition.y)
    // setDotPosition(value > 10 ? { x: 0, y: 75 } : { x: 0, y: -75 })
    // setAnsweredCorrectly(false)
  }

  const markQuestionAsCorrect = (x, y, isLine) => {
    // debugger
    isLine ? setLinePosition({x: x, y: y}) : setDotPosition({x: x, y: y})
    setAnsweredCorrectly(true)
    setScore((preScore) => preScore + questionAnswer.score)
  }


  // const evaluateAnswer = (value, pointX, pointY, answer1, answer2) => {
  //   if (value <= 10 && value >= -10) return

  //   if (value > 10 && answer === answer1)
  //     markQuestionAsCorrect(pointX, pointY)
  //   else if (value < -10 && answer === answer2)
  //     markQuestionAsCorrect(-(pointX), -(pointY))
  //   setDisable(true)
  //   return false
  // }

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
      {answeredCorrectly == false && answer.includes('Shift') && <div style={{ position: 'absolute', height: "300px", width: "5px", backgroundColor: "#2e8599", borderRadius: '5px', left: correctPostion }}></div>}
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
      <div style={{display: "flex", justifyContent: "center", height: "300px", width: "5px", backgroundColor: "#003E4C", position: "relative", borderRadius: '5px'}}>
        <div
          style={{
            position: "absolute",
            transform: "rotate(45deg)",
            border: "5px solid #003e4c",
            borderRadius: "50%",
            padding: "10px",
            backgroundColor: "#00b1d9",
            top: '41.81%',
            color: "blue"
          }}
          />
          {answeredCorrectly == false && answer.includes('moves') &&<div
          style={{
            position: "absolute",
            transform: "rotate(45deg)",
            border: "5px solid #003e4c",
            borderRadius: "50%",
            padding: "10px",
            backgroundColor: "#00b1d9",
            color: "blue",
            top: correctPostion
          }}
          />}
        <Draggable
          axis="y"
          defaultPosition={{x: 0, y: 125}}
          position={answeredCorrectly == true && answer.includes('moves') ? dotPosition : null}
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
                border: "5px solid #003e4c",
                borderRadius: "50%",
                padding: "10px",
                backgroundColor: "#00b1d9",
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
