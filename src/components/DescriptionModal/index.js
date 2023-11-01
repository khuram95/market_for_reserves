import React from "react";
import { Button, Grid, Modal, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
// import ThreeOptionVerticalSwitch from '../slider/ThreeOptionVerticalSwitch';
import styles from "./styles";
import "animate.css/animate.css";
import slideTutorial from "../../images/ample-modal.svg";

const DescriptionModal = ({
  classes,
  hideModal,
  open,
}) => {
  return (
    <Modal open={open} onClick={() => hideModal()}>
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid className={`${classes.evaluatorModalContainer}`}>
          <Grid container className={classes.evalInnerModal}>
            <Grid style={{ width: "60%" }}>
              <Typography className={classes.evalDescHeading}>
              In the 2008 Financial Crisis, the Federal Reserve bought so many assets from banks that the supply curve moved to the flat part of the demand curve.
              </Typography>
              <Typography
                className={classes.evalDesc}
                style={{ padding: "10px 0px" }}
              >
              This is called the AMPLE RESERVE ENVIRONMENT. The Fed Funds rate is now where the supply curve intersects the demand curve.
              </Typography>
            </Grid>
            <Grid style={{  display: "flex", width: "30%", justifyContent: "right" }}>
              <img
                alt=""
                src={slideTutorial}
                className={classes.correctIncorrectIcon}
              />
            </Grid>
            {/* <ThreeOptionVerticalSwitch
                  selected={0}
                  index={3}
                >
            </ThreeOptionVerticalSwitch> */}
          </Grid>
          <Grid container justify="center">
            <Button
              className={classes.submitButton}
              // onClick={() => nextQuestion()}
            >
              GOT IT
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default withStyles(styles)(DescriptionModal);
