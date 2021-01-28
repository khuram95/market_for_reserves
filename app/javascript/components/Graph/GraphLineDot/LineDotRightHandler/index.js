import React from 'react'
import LineDotRight from './LineDotRight'
import LineDotLeft from '../LineDotLeftHandler/LineDotLeft'
// import LineDotLeftMobile from './LineDotLeftMobile'
import LineDotRightEmulator from './LineDotRightEmulator'
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

const LineDotRightHandler = (props) => {

  const {
    showDragMessage,
    dottedLineLabels,
    classes,
    ...otherProps
  } = props

  const theme = useTheme();
  const isEmulator = useMediaQuery(emulatorScreen(theme));
  const isMobile = useMediaQuery(mobileScreen(theme));

  const LineDotRightResponsive = () => {
    if (isMobile)
      return <LineDotRightEmulator {...otherProps} />
    else if (isEmulator)
      return <LineDotRightEmulator {...otherProps} />
    else
      return <LineDotRight {...otherProps} />
  }

  return (
    <Grid className={classes.graphLines}>
      {showDragMessage && <img src={dragLine} className={`${classes.dragLineMessage} animate__animated animate__bounceIn`} />}
      <img src={price} className={classes.graphYLable} />
      {/* {dottedLineLabels
        &&  <LeftLabels
              isEmulator={isEmulator}
              isMobile={isMobile}
              answer={props.questionAnswer.answer}
        />} */}
      {LineDotRightResponsive()}
      {/* <LineDotLeft {...otherProps} /> */}
      <img src={quantity} className={classes.graphXLable} />
    </Grid>
  )
}

export default withStyles(styles)(LineDotRightHandler)
