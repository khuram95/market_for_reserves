import React from "react";
import LineDotRight from "./LineDotRight";
import LineDotRightMobile from "./LineDotRightMobile";
import LineDotRightEmulator from "./LineDotRightEmulator";
import styles from "./styles";
import price from "../../../../images/price.svg";
import quantity from "../../../../images/quantity.svg";
import dragLine from "../../../../images/dragLineRightDark.svg";
import { emulatorScreen, mobileScreen } from "../../../../utils/styleUtils";
import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const LineDotRightHandler = (props) => {
  const { showDragMessage, dottedLineLabels, classes, ...otherProps } = props;

  const theme = useTheme();
  const isEmulator = useMediaQuery(emulatorScreen(theme));
  const isMobile = useMediaQuery(mobileScreen(theme));

  const LineDotRightResponsive = () => {
    if (isMobile) return <LineDotRightMobile {...otherProps} />;
    else if (isEmulator) return <LineDotRightEmulator {...otherProps} />;
    else return <LineDotRight {...otherProps} />;
  };

  return (
    <Grid className={classes.graphLines}>
      {showDragMessage && (
        <img
          src={dragLine}
          className={`${classes.dragLineMessage} animate__animated animate__bounceIn`}
        />
      )}
      <img src={price} className={classes.graphYLable} />
      {LineDotRightResponsive()}
      <img src={quantity} className={classes.graphXLable} />
    </Grid>
  );
};

export default withStyles(styles)(LineDotRightHandler);
