import React from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import CoverImage from '../../images/coverImage.svg'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles'
import mruLogo from "../../images/mruLogo.png"
// import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


const HomeScreen = ({ classes, setCurrentScreen }) => {

  const handleClick = () => setCurrentScreen("Tutorial")

  return (
    <Grid
      container
      justify='space-between'
      direction='column'
      className={classes.homeScreenContainer}
      onClick={handleClick}
    >
      <Grid container direction='column' alignItems='center' style={{ flexWrap: 'nowrap' }}>
        <Typography variant='h5' className={classes.homeTitle}>
          ECON PRACTICE
        </Typography>
        <img src={CoverImage} className={classes.logo} />
        <Grid className={classes.quizDesc}>
          <Typography variant='h5' className={classes.homeDesc}>
            {/* Change in Demand vs. */}
            Change in Quantity
          </Typography>
          <Typography variant='h5' className={classes.homeDesc}>
            {/* Change in Quantity Demanded */}
            Change in Quantity Supplied
          </Typography>
        </Grid>
        <Button
          className={classes.submitButton}
          onClick={handleClick}
        >
          PLAY
        </Button>
      </Grid>
      <Grid container justify='space-between'>
        <Grid style={{ padding: "2rem"}}>
        </Grid>
        <Grid className={classes.mruLogo}>
          <img src={mruLogo} width='110px' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(HomeScreen)
