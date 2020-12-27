import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import ArrowLeft from "../../images/ArrowLeft.svg"
import ArrowRight from "../../images/ArrowRight.svg"
import { withStyles } from '@material-ui/core/styles'
import 'animate.css/animate.css'
import styles from './styles'

const ShiftTheLine = ({ classes }) => {
  return (
    <>
      <Grid container className="animate__animated animate__bounceIn">
        <img src={ArrowLeft} width="45px" height="40px" />
        <Typography variant='h5' className={classes.questionText}>
          SHIFT THE CURVE
        </Typography>
        <img src={ArrowRight} width="45px" height="40px"/>
      </Grid>
      <Grid style={{ textAlign: "center" }}>
        <Typography variant='h5' className={classes.questionDesc}>
          To show change
        </Typography>
        <Typography variant='h5' className={classes.questionDesc}>
          in supply or demand
        </Typography>
      </Grid>
    </>
  )
}

export default withStyles(styles)(ShiftTheLine)
