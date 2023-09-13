import React from 'react'
import { Modal, Grid, Typography } from "@material-ui/core"
import withStyles from "@material-ui/core/styles/withStyles"
import rotatePhone from "../../../../../images/rotatePhone.svg"
import styles from "./styles"

const RotateModal = ({ isOpen, classes }) => {
  return (
    <Modal
      open={isOpen}
    >
      <Grid container justify='center' alignItems='center' className={classes.modalContainer}>
        <Grid>
          <img src={rotatePhone} width="200" />
        </Grid>
      </Grid>
    </Modal>
  )
}

export default withStyles(styles)(RotateModal)
