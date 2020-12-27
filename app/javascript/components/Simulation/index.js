import React, { useState, useEffect } from 'react'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'
import LineDotLeft from './LineDotLeft'
import { Grid, Typography, Button, Modal } from '@material-ui/core'
import price from '../../images/price.svg'
import quantity from '../../images/quantity.svg'
import ShiftTheLine from './ShiftTheLine'
import MoveThePoint from './MoveThePoint'
import { useHistory } from 'react-router-dom'

import 'animate.css/animate.css'

const Simulation = (props) => {
  const { classes } = props

  let history = useHistory()

  const [move, setMove] = useState('none')
  const [quizButton, setQuizButton] = useState('skip')
  const [runTutorial, setRunTutorial] = useState('none')

  useEffect(() => {
    setTimeout(() => {
      setRunTutorial("line")
    }, 2000)
    setTimeout(() => {
      setRunTutorial("or")
    }, 8000)
    setTimeout(() => {
      setRunTutorial("dot")
    }, 11000)
  },[])

  useEffect(() => {
    switch (runTutorial) {
      case "none":
        break;
      case "line":
        setTimeout(() => { setMove("line") }, 1000)
        break;
      case "or":
        setMove("none")
        break;
      case "dot":
        setTimeout(() => { setMove("dot") }, 1000)
        setTimeout(() => { setQuizButton("got it") }, 5000)
        setTimeout(() => { onClickSkip() }, 8000)
          break;
      default:
        break;
    }
  },[runTutorial])

  const onClickSkip = () => {
    history.push("/quiz")
  }

  return (
    <Grid container alignItems="center" direction="column">
      <Grid container item justify='space-evenly' className={[classes.graphContainer]}>
        <Grid container style={{ flex: '0.5' }}>
          <Typography variant="h5" align='right' className={classes.questionTitle}></Typography>
          <div className={classes.graphDiv}>
            <Grid container justify='center' style={{maxWidth: '520px'}}>
              <Grid className={classes.graphLines}>
                <img src={price} className={classes.graphYLable}></img>
                <LineDotLeft move={move}/>
                <img src={quantity} className={classes.graphXLable}></img>
              </Grid>
            </Grid>
          </div>
        </Grid>

        <Grid className={classes.questionContainer}>
          <Grid className={classes.questionBody}>
            <Typography className={classes.questionTitle}>
              HOW TO PLAY
            </Typography>
            {runTutorial === 'line' && <ShiftTheLine/>}
            {runTutorial === 'or' && <Typography className={[classes.questionText, "animate__animated animate__bounceIn"]} style={{ textAlign: 'center', paddingTop: '30px'}}>
              OR
            </Typography>}
            {runTutorial === 'dot' && <MoveThePoint/>}
          </Grid>
        </Grid>
      </Grid>
      <Button
        className={classes.submitButton}
        onClick={onClickSkip}
      >
        {quizButton === 'skip' ? "SKIP" : "GOT IT"}
      </Button>
    </Grid>
  )}

export default withStyles(styles)(Simulation)
