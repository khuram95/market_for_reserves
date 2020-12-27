import React, { useState } from 'react'
import { Grid, Typography, Button } from '@material-ui/core'
import CoverImage from '../../images/coverImage.svg'
import styles from './styles'
import { withStyles, Input } from '@material-ui/core/styles'
import { useHistory } from "react-router-dom"
import mruLogo from "../../images/mruLogo.png"
// import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


const HomeScreen = ({ classes }) => {

  const [name, setName] = useState("")

  let history = useHistory()

  const handleClick = () => {
    history.push("/tutorial")
  }

  return (
    <Grid
      container
      justify='space-between'
      direction='column'
      className={classes.homeScreenContainer}
    >
      <Grid container direction='column' alignItems='center'>
        <Typography variant='h5' className={classes.homeTitle}>
          ECON PRACTICE
        </Typography>
        <img src={CoverImage} className={classes.logo} />
        <Grid style={{ marginTop: '-200px'}}>
          <Typography variant='h5' className={classes.homeDesc}>
            Change In Demand vs.
          </Typography>
          <Typography variant='h5' className={classes.homeDesc}>
            Change In Quality Demanded
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

          <Typography variant='h5' className={classes.classAssignmentTitle}>
            Submitting as class assignment?
          </Typography>
          <input
            className={classes.nameInput}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your name here"
          />

        </Grid>
        <Grid className={classes.mruLogo}>
          <img src={mruLogo} width='110px' />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(HomeScreen)
