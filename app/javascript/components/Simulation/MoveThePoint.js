import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import ArrowUp from "../../images/ArrowUp.svg"
import ArrowDown from "../../images/ArrowDown.svg"
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import 'animate.css/animate.css'


const MoveThePoint = ({ classes }) => {
  return (
    <>
      <Grid container className="animate__animated animate__bounceIn">
        <img src={ArrowUp} width="45px" height="50px" />
        <Typography variant='h5' className={classes.questionText} style={{marginTop: "0px"}}>
          MOVE THE POINT
        </Typography>
        <img src={ArrowDown} width="45px" height="50px"/>
      </Grid>
      <Grid style={{ textAlign: "center" }}>
        <Typography variant='h5' className={classes.questionDesc}>
          To show change
        </Typography>
        <Typography variant='h5' className={classes.questionDesc}>
          in quantity supplied
        </Typography>
        <Typography variant='h5' className={classes.questionDesc}>
          or demanded
        </Typography>
      </Grid>
    </>
  )
}

export default withStyles(styles)(MoveThePoint)
