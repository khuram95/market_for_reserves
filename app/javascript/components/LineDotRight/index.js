import React, { useState } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


const LineDotRight = (props) => {

  const { questionAnswer, setAnsweredCorrectly, answeredCorrectly } = props
  const { answer } = questionAnswer
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 })
  const [answered, setAnswered] = useState(false)

  const DragStartLine = (event) => {
    console.log("event line", event)
  }

  const DragLine = (event, ui) => {
    console.log("event dragging line", event)
    setLinePosition({ x:  linePosition.x + ui.deltaX, y: linePosition.y + ui.deltaY})
    console.log("event dragging", linePosition)
  }

  const DragEndLine = (event) => {
    if (linePosition.x > 10 && answer === "Shift right") {
      console.log("Correct")
      setLinePosition({x: 75, y: 0})
      setAnsweredCorrectly(true)
    }
    else if (linePosition.x < -10 && answer === "Shift left") {
      console.log("Correct")
      setLinePosition({x: -75, y: 0})
      setAnsweredCorrectly(true)
    }
    else {
      console.log("Wrong")
      setAnsweredCorrectly(false)
    }
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
  const DragEndDot = (event) => {
    event.stopPropagation();
    if (dotPosition.y > 10) {
      console.log('move down')
    }
    if (dotPosition.y < -10) {
      console.log('move up')
    }
    console.log("event stop", event)
    if (dotPosition.x > 10 && answer === "Dot moves down")
      console.log("Correct")
    else if (dotPosition.x < -10 && answer === "Dot moves up")
      console.log("Correct")
    else
      console.log("Wrong")
  }

  return (
    <div style={{ position: "absolute", top: "80px", left: "165px", transform: "rotate(45deg)" }} >
      <Draggable
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        position={answeredCorrectly != null ? linePosition : null}
        scale={1}
        bounds={{top: 0, left: -75, right: 75, bottom: 0}}
        onStart={DragStartLine}
        onDrag={DragLine}
        onStop={DragEndLine}
      >
      <div style={{display: "flex", justifyContent: "center", height: "300px", width: "5px", backgroundColor: "black", position: "relative"}}>
        <div
          style={{
            position: "absolute",
            transform: "rotate(-45deg)",
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
        >
          <div style={{height: '40px'}}>
            <div
              style={{
                transform: "rotate(-45deg)",
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

export default LineDotRight
