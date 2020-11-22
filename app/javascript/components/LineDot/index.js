import React, { useState } from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


const LineDot = () => {
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 })

  const DragStartLine = (event) => {
    console.log("event line", event)
  }
  const DragLine = (event) => {
    console.log("event dragging line", event)
  }
  const DragEndLine = (event) => {
    console.log("event stop line", event)
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
  }

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", transform: "rotate(45deg)", width: '300px' }} >
      <Draggable
        axis="x"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        scale={1}
        bounds={{top: 0, left: -50, right: 50, bottom: 0}}
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

export default LineDot
