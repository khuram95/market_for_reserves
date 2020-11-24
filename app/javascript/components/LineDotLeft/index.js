import React, { useState } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


const LineDotLeft = (props) => {

  const { questionAnswer, setAnsweredCorrectly, answeredCorrectly, setScore } = props
  const { answer } = questionAnswer
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 })
  const [disable, setDisable] = useState(false)

  const DragStartLine = (event) => {
    console.log("event line", event)
  }

  const DragLine = (event, ui) => {
    console.log("event dragging line", event)
    setLinePosition({ x:  linePosition.x + ui.deltaX, y: linePosition.y + ui.deltaY})
    console.log("event dragging", linePosition)
  }

  const markQuestionAsCorrect = (x, y) => {
    setLinePosition({x: x, y: y})
    setAnsweredCorrectly(true)
    setScore((preScore) => preScore + questionAnswer.score)
  }

  const DragEndLine = (event) => {
    evaluateAnswer(linePosition.x, 75, 0, 'Shift right', 'Shift left')
  }

  const DragEndDot = (event) => {
    event.stopPropagation();
    evaluateAnswer(dotPosition.y, 0, 75, 'Dot moves down', 'Dot moves up')
  }

  const evaluateAnswer = (value, pointX, pointY, answer1, answer2) => {
    if (value <= 10 && value >= -10) return

    setAnsweredCorrectly(false)
    if (value > 10 && answer === answer1)
      markQuestionAsCorrect(pointX, pointY)
    else if (value < -10 && answer === answer2)
      markQuestionAsCorrect(-(pointX), -(pointY))

    setDisable(true)
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
      <div style={{display: "flex", justifyContent: "center", height: "300px", width: "5px", backgroundColor: "black", position: "relative"}}>
        <div
          style={{
            position: "absolute",
            transform: "rotate(45deg)",
            border: "1px solid black",
            borderRadius: "50%",
            padding: "10px",
            top: '41.81%',
            backgroundColor: "yellow",
            color: "blue"
          }}
        >A</div>
        <Draggable
          axis="y"
          defaultPosition={{x: 0, y: 125}}
          position={null}
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
                border: "1px solid black",
                borderRadius: "50%",
                padding: "10px",
                backgroundColor: "yellow",
                color: "blue"
              }}
            >B</div>
          </div>
        </Draggable>
      </div>
      </Draggable>
    </div>
  )
}

export default LineDotLeft
