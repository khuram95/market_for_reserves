import React, { useState } from 'react'
import DemandCurveMobile from './DemandCurveMobile'
import SupplyCurveMobile from './SupplyCurveMobile'
import DemandCurve from './DemandCurve'
import SupplyCurve from './SupplyCurve'
import styles from './styles'
import price from 'images/price.svg'
import quantity from 'images/quantity.svg'
import dragLine from 'images/dragLineDark.svg'
// import LeftLabels from './LeftLabels'
import { emulatorScreen, mobileScreen } from "utils/styleUtils"
import { useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const LineDotBothHandler = (props) => {

  const {
    showDragMessage,
    dottedLineLabels,
    classes,
    ...otherProps
  } = props

  const theme = useTheme();
  const isEmulator = useMediaQuery(emulatorScreen(theme));
  const isMobile = useMediaQuery(mobileScreen(theme));
  const [disableDemand, setDisableDemand] = useState(false)
  const [disableSupply, setDisableSupply] = useState(false)

  const demandCurveResponsive = () => {
    if (isMobile)
      return <DemandCurveMobile
        {...otherProps}
        disableDemand={disableDemand}
        setDisableDemand={setDisableDemand}
        disableSupply={disableSupply}
        setDisableSupply={setDisableSupply}
      />
    // else if (isEmulator)
    //   return <DemandCurveEmulator {...otherProps} />
    else
      return <DemandCurve
        {...otherProps}
        disableDemand={disableDemand}
        setDisableDemand={setDisableDemand}
        disableSupply={disableSupply}
        setDisableSupply={setDisableSupply}
      />
  }

  const supplyCurveResponsive = () => {
    if (isMobile)
      return <SupplyCurveMobile
        {...otherProps}
        disableDemand={disableDemand}
        setDisableDemand={setDisableDemand}
        disableSupply={disableSupply}
        setDisableSupply={setDisableSupply}
      />
    // else if (isEmulator)
    //   return <SupplyCurveEmulator  {...otherProps}
        // disableDemand={disableDemand}
        // setDisableDemand={setDisableDemand}
        // disableSupply={disableSupply}
        // setDisableSupply={setDisableSupply} />
    else
      return <SupplyCurve
        {...otherProps}
        disableDemand={disableDemand}
        setDisableDemand={setDisableDemand}
        disableSupply={disableSupply}
        setDisableSupply={setDisableSupply}
      />
  }

  return (
    <Grid className={classes.graphLines}>
      {showDragMessage && <img src={dragLine} className={`${classes.dragLineMessage} animate__animated animate__bounceIn`} />}
      <img src={price} className={classes.graphYLable} />
      {demandCurveResponsive()}
      {supplyCurveResponsive()}
      {/* <DemandCurve
        {...otherProps}
        disableDemand={disableDemand}
        setDisableDemand={setDisableDemand}
        disableSupply={disableSupply}
        setDisableSupply={setDisableSupply}
      />
      <SupplyCurve
        {...otherProps}
        disableDemand={disableDemand}
        setDisableDemand={setDisableDemand}
        disableSupply={disableSupply}
        setDisableSupply={setDisableSupply}
      /> */}
      <img src={quantity} className={classes.graphXLable} />
    </Grid>
  )
}

export default withStyles(styles)(LineDotBothHandler)
