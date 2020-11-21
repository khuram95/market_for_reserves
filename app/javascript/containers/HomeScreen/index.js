import React from 'react'
import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


const HomeScreen = () => {


  const handleStart = (event) => {
    console.log("event", event)
  }

  return (
    <div style={{display: "flex", justifyContent: "center", height: "100vh", transform: "rotate(45deg)"}}>
      <Draggable axis="x"
          // handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          // grid={[25, 25]}
          scale={1}
          // bounds={'absolute'}
          // bounds={{top: 0, left: 0, right: 0, bottom: 450}}
          onStart={handleStart}
>
      <div style={{display: "flex", justifyContent: "center", height: "500px", width: "5px", backgroundColor: "black", position: "relative"}}>
          <div
            style={{
              position: "absolute",
              transform: "rotate(-45deg)",
              border: "1px solid black",
              borderRadius: "50%",
              padding: "10px",
              backgroundColor: "yellow",
              color: "blue"
            }}
          >A</div>
        <Draggable
          axis="y"
          // handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          position={null}
          // grid={[25, 25]}
          scale={1}
          // bounds={'absolute'}
          bounds={{top: 0, left: 0, right: 0, bottom: 450}}
          onStart={handleStart}
          // onDrag={this.handleDrag}
          // onStop={this.handleStop}
        >
          <div>
            {/* <div className="handle">Drag from here</div> */}
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

export default HomeScreen
