import React, { useState, useEffect } from 'react'
import Draggable from 'react-draggable'; // Both at the same time
import { withStyles } from '@material-ui/core/styles'
import HandCursor from '../../../images/handCursor.svg'
import 'animate.css/animate.css'
import styles from './styles'

const LineDotLeft = (props) => {
  const { classes, move } = props
  //adjust dot center accoring to line
  const heightOfLine = 400
  const dotCenterPosition = (heightOfLine - 30)/2

  const [dotPosition, setDotPosition] = useState(dotCenterPosition)
  const [linePosition, setLinePosition] = useState("240px")

  useEffect(() => {
    switch (move) {
      case "none":
        break;
      case "line":
        setTimeout(() => {
          setLinePosition("290px")
        }, 1000)
        setTimeout(() => {
          setLinePosition("190px")
        }, 2000)
        setTimeout(() => {
          setLinePosition("240px")
        }, 3000)
        break;
      case "dot":
        setTimeout(() => {
          setDotPosition(dotCenterPosition + 70)
        }, 1000)
        setTimeout(() => {
          setDotPosition(dotCenterPosition - 70)
        }, 2000)
        setTimeout(() => {
          setDotPosition(dotCenterPosition)
        }, 3000)
        break;
      default:
        break;
    }
  },[move])

  return (
    <div className={classes.verticalLinesContainer} style={{ left: linePosition}}>
      <div className={classes.defaultLine} />
        <div>
          <div className={classes.dragableLine}  style={{backgroundColor: move == 'line' ? '#00b1d9' : '#fff'}}>
            <div className={classes.draggableDot}
              style={{ top: `${dotPosition}px`, transition: `top 1s`, backgroundColor: move == 'dot' ? '#00b1d9' : '#fff' }}
            />
              <div style={{height: '40px'}}>
              <img
                src={HandCursor}
                className={classes.handCursorDesign}
                style={{
                  opacity: (move === 'none' || move === 'or') ? '0' : '1',
                  top:  move === 'dot' ? `${dotPosition + 15}px` : '250px',
                  right: move === 'dot' ? '3px' : '-5px'
                }}
              />
              </div>
          </div>
        </div>
    </div>
  )
}

export default withStyles(styles)(LineDotLeft)
