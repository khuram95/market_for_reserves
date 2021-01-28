import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'; // Both at the same time
import { withStyles } from '@material-ui/core/styles'
import HandCursor from 'images/handCursor.svg'
import xMark from 'images/xMark.svg'
import 'animate.css/animate.css'
import styles from './styles'

const LineDotRight = (props) => {
  const {
    classes,
    move,
    dotCenterPosition,
    dotShiftVariant,
    lineDefaultPosition,
    lineShiftVariant
  } = props

  //adjust dot center accoring to line
  const [dotPosition, setDotPosition] = useState(dotCenterPosition)
  const [linePosition, setLinePosition] = useState(`${lineDefaultPosition + lineShiftVariant}px`)

  useEffect(() => {
    switch (move) {
      case "none":
        break;
      case "line":
        animateLine()
        break;
      case "dot":
        animateDot()
        break;
      default:
        break;
    }
  }, [move])

  const animateLine = () => {
    setTimeout(() => {
      setLinePosition(`${lineDefaultPosition - lineShiftVariant}px`)
    }, 1000)
    setTimeout(() => {
      setLinePosition(`${lineDefaultPosition + lineShiftVariant}px`)
      animateLine()

    }, 2000)
    // setTimeout(() => {
    //   // setLinePosition("240px")
    //   animateLine()
    // }, 3000)
  }

  const animateDot = () => {
    setTimeout(() => {
      setDotPosition(dotCenterPosition + dotShiftVariant)
    }, 1000)
    setTimeout(() => {
      setDotPosition(dotCenterPosition - dotShiftVariant)
      animateDot()
    }, 2000)
    // setTimeout(() => {
    //   setDotPosition(dotCenterPosition)
    // }, 3000)
  }

  return (
    <div className={classes.verticalLinesContainer} style={{ left: move === 'line' ? linePosition : `${lineDefaultPosition}px`}}>
      {/* <div className={classes.defaultLine} /> */}
        <div>
        <div className={classes.dragableLine} style={{ backgroundColor: move == 'line' ? '#00b1d9' : '#fff' }}>
          <div
            className={classes.draggableDot}
            style={{
              top: `${dotPosition}px`,
              transition: `top 1s`,
              backgroundColor: move == 'dot' ? '#00b1d9' : '#fff'
            }}
          />
          {move === "line" && <img src={xMark} style={{ top: `${dotCenterPosition - 5}px` }} className={classes.crossMark} />}
            <div style={{height: '40px'}}>
            <img
              src={HandCursor}
              className={move === 'dot' ? classes.handCursorDotDesign : classes.handCursorLineDesign}
              style={{
                opacity: (move === 'none' || move === 'or') ? '0' : '1',
                [move === 'dot' ? "top" : ""]:  `${dotPosition + 5}px`,
                // right: move === 'dot' ? '-38px' : '-38px'
              }}
            />
            </div>
          </div>
        </div>
    </div>
  )
}

export default withStyles(styles)(LineDotRight)
