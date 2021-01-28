import React from 'react'
import LineDotLeft from './LineDotLeft'
import LineDotLeftMobile from './LineDotLeftMobile'
import LineDotLeftEmulator from './LineDotLeftEmulator'
import styles from './styles'
import price from 'images/price.svg'
import quantity from 'images/quantity.svg'
import dragLine from 'images/dragLineDark.svg'
import LeftLabels from './LeftLabels'
import { emulatorScreen, mobileScreen } from "utils/styleUtils"
import { useTheme } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'
import withStyles from '@material-ui/core/styles/withStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery';

const LineDotLeftHandler = (props) => {

  const {
    showDragMessage,
    dottedLineLabels,
    classes,
    ...otherProps
  } = props

  const theme = useTheme();
  const isEmulator = useMediaQuery(emulatorScreen(theme));
  const isMobile = useMediaQuery(mobileScreen(theme));

  const LineDotLeftResponsive = () => {
    if (isMobile)
      return <LineDotLeftMobile {...otherProps} />
    else if (isEmulator)
      return <LineDotLeftEmulator {...otherProps} />
    else
      return <LineDotLeft {...otherProps} />
  }

  return (
    <Grid className={classes.graphLines}>
      {showDragMessage && <img src={dragLine} className={`${classes.dragLineMessage} animate__animated animate__bounceIn`} />}
      <img src={price} className={classes.graphYLable} />
      {LineDotLeftResponsive()}
      <img src={quantity} className={classes.graphXLable} />
    </Grid>
  )
}

export default withStyles(styles)(LineDotLeftHandler)
