import React, { useState } from "react";
import DemandCurve from "./DemandCurve";
import SupplyCurve from "./SupplyCurve";
import DemandCurveEmulator from "./DemandCurveEmulator";
import SupplyCurveEmulator from "./SupplyCurveEmulator";
import DemandCurveMobile from "./DemandCurveMobile";
import SupplyCurveMobile from "./SupplyCurveMobile";
import styles from "./styles";
// import price from "../../../../images/price.svg";
import interestRate from "../../../../images/Interest-rate.svg";
import quantity from "../../../../images/quantity.svg";
import { emulatorScreen, mobileScreen } from "../../../../utils/styleUtils";
import { useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const LineDotBothHandler = (props) => {
  const { showDragMessage, dottedLineLabels, classes, ...otherProps } = props;

  const theme = useTheme();
  const isEmulator = useMediaQuery(emulatorScreen(theme));
  const isMobile = useMediaQuery(mobileScreen(theme));
  const [disableDemand, setDisableDemand] = useState(false);
  const [disableSupply, setDisableSupply] = useState(false);

  const demandCurveResponsive = () => {
    if (isMobile)
      return (
        <DemandCurveMobile
          {...otherProps}
          disableDemand={disableDemand}
          setDisableDemand={setDisableDemand}
          disableSupply={disableSupply}
          setDisableSupply={setDisableSupply}
        />
      );
    else if (isEmulator)
      return (
        <DemandCurveEmulator
          {...otherProps}
          disableDemand={disableDemand}
          setDisableDemand={setDisableDemand}
          disableSupply={disableSupply}
          setDisableSupply={setDisableSupply}
        />
      );
    else
      return (
        <DemandCurve
          {...otherProps}
          disableDemand={disableDemand}
          setDisableDemand={setDisableDemand}
          disableSupply={disableSupply}
          setDisableSupply={setDisableSupply}
        />
      );
  };

  const supplyCurveResponsive = () => {
    if (isMobile)
      return (
        <SupplyCurveMobile
          {...otherProps}
          disableDemand={disableDemand}
          setDisableDemand={setDisableDemand}
          disableSupply={disableSupply}
          setDisableSupply={setDisableSupply}
        />
      );
    else if (isEmulator)
      return (
        <SupplyCurveEmulator
          {...otherProps}
          disableDemand={disableDemand}
          setDisableDemand={setDisableDemand}
          disableSupply={disableSupply}
          setDisableSupply={setDisableSupply}
        />
      );
    else
      return (
        <SupplyCurve
          {...otherProps}
          disableDemand={disableDemand}
          setDisableDemand={setDisableDemand}
          disableSupply={disableSupply}
          setDisableSupply={setDisableSupply}
        />
      );
  };

  return (
    <Grid className={classes.graphLines}>
      <img src={interestRate} className={classes.graphYLable} />
      {demandCurveResponsive()}
      {supplyCurveResponsive()}
      <img src={quantity} className={classes.graphXLable} />
    </Grid>
  );
};

export default withStyles(styles)(LineDotBothHandler);
