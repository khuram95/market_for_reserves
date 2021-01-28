import React from 'react'
import styles from './styles'
import { Grid, Modal, Typography, Button } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'

const WrongMoveModal = (props) => {

  const {
    open,
    modalClose,
    classes
  } = props
  return (
    <Modal
      open={open}
      onClose={modalClose}
      onClick={modalClose}
      style={{ cursor: "pointer" }}
      aria-describedby="simple-modal-description"
    >
      <Grid container justify='center' alignItems='center' className={classes.modal}>
        <Grid>
          <Typography id="simple-modal-description" align='center' className={classes.modalDescription}>
            You must either shift the line OR move the dot.
          </Typography>
          <Button className={classes.backButton} >
              BACK
          </Button>
        </Grid>
      </Grid>
    </Modal>
  )
}

export default withStyles(styles)(WrongMoveModal)
