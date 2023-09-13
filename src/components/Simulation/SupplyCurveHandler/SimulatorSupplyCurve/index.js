import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'; // Both at the same time
import { withStyles } from '@material-ui/core/styles'
import sBlue from '../../../../../images/equalibriumIcons/S-blue.svg'
import HandCursor from '../../../../../images/handCursor.svg'
import xMark from '../../../../../images/xMark.svg'
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
  }

  const animateDot = () => {
    setTimeout(() => {
      setDotPosition(dotCenterPosition + dotShiftVariant)
    }, 1000)
    setTimeout(() => {
      setDotPosition(dotCenterPosition - dotShiftVariant)
      animateDot()
    }, 2000)
  }

  return (
    <div className={classes.verticalLinesContainer} style={{ left: move === 'line' ? linePosition : `${lineDefaultPosition}px`}}>
      <div>
        <div className={classes.dragableLine} style={{ backgroundColor: '#00b1d9' }}>
          <img src={sBlue} className={classes.lineIcon} />
          <div style={{height: '40px'}}>
          <img
            src={HandCursor}
            className={move === 'dot' ? classes.handCursorDotDesign : classes.handCursorLineDesign}
            style={{
              opacity: '1'
            }}
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(styles)(LineDotRight)
