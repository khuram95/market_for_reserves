import React from 'react'
import styles from './styles'
import { Typography } from '@material-ui/core'
import LineTo from 'react-lineto';
import withStyles from '@material-ui/core/styles/withStyles'

const LeftLabels = (props) => {

  const {
    answer,
    isMobile,
    isEmulator,
    p2Top,
    p1Top,
    originP,
    originCorrectP,
    q1,
    q2,
    originQ,
    dotCorrectQ,
    classes
  } = props

  const setP2Label = () => {
    if (answer.includes('down'))
      if (isMobile)
        return "26px"
      else if (isEmulator)
        return '38px'
      else
        return '70px'
    else
      if (isMobile)
        return "84px"
      else if (isEmulator)
        return '120px'
      else
        return '203px'
  }

  const setQ2Label = () => {
    if (answer.includes('down'))
      if (isMobile)
        return "60px"
      else if (isEmulator)
        return '97px'
      else
        return '153px'
    else
      if (isMobile)
        return "115px"
      else if (isEmulator)
        return '180px'
      else
        return '288px'
  }

  return (
    <span className="animate__animated animate__fadeIn">
      <Typography className={classes.graphP1Lable}>P1</Typography>
      <Typography className={classes.graphP2Lable} style={{ top: setP2Label() }}>P2</Typography>

      <Typography className={classes.graphQ1Lable}>Q1</Typography>
      <Typography className={classes.graphQ2Lable} style={{ left: setQ2Label() }}>Q2</Typography>
      <>
        <div
          className={'P2'}
          style={{ position: 'absolute', top: p2Top }}
        />
        <div
          className={'P1'}
          style={{
            position: 'absolute',
            top: p1Top
          }}
        />

        <div
          className={'dotOriginP'}
          style={{
            position: 'absolute',
            top: originP.top,
            left: originP.left
          }}
        />
        <div
          className={'dotCorrectP'}
          style={{
            position: 'absolute',
            top: originCorrectP.top,
            left: originCorrectP.left
          }}
        />

        <LineTo
          from="dotOriginP"
          to="P2"
          orientation='h'
          borderStyle='dashed'
          borderWidth='4px'
          borderColor='#003e4c'
          fromAnchor='20%'delay={true}
          className="animate__animated animate__fadeIn"
        />
        <LineTo
          from="dotCorrectP"
          to="P1"
          orientation='h'
          borderStyle='dashed'
          borderWidth='4px'
          borderColor='#003e4c'
          fromAnchor='20%'delay={true}
          className="animate__animated animate__fadeIn"
        />

        <div className={'Q1'} style={{ position: 'absolute', top: q1.top, left: q1.left }} />
        <div className={'Q2'} style={{ position: 'absolute', top: q2.top, left: q2.left }} />

        <div className={'dotOriginQ'} style={{ position: 'absolute', top: originQ.top, left: originQ.left }} />
        <div className={'dotCorrectQ'} style={{ position: 'absolute', top: dotCorrectQ.top, left: dotCorrectQ.left }} />

        <LineTo
          from="dotOriginQ"
          to="Q1"
          orientation='h'
          borderStyle='dashed'
          borderWidth='4px'
          borderColor='#003e4c'
          fromAnchor='20%'delay={true}
          className="animate__animated animate__fadeIn"
        />
        <LineTo
          from="dotCorrectQ"
          to="Q2"
          orientation='h'
          borderStyle='dashed'
          borderWidth='4px'
          borderColor='#003e4c'
          fromAnchor='20%'delay={true}
          className="animate__animated animate__fadeIn"
        />
      </>
    </span>
  )
}

export default withStyles(styles)(LeftLabels)
