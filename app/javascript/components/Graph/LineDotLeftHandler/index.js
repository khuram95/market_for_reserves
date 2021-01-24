import React from 'react'
import LineDotLeft from '../LineDotLeft'
import LineDotLeftMobile from '../LineDotLeftMobile'
import LineDotLeftEmulator from '../LineDotLeftEmulator'
import { emulatorScreen, mobileScreen } from "utils/styleUtils"
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const LineDotLeftHandler = (props) => {

  const theme = useTheme();
  const isEmulator = useMediaQuery(emulatorScreen(theme));
  const isMobile = useMediaQuery(mobileScreen(theme));


  if (isMobile)
    return (
      <LineDotLeftMobile {...props} />
    )

  if (isEmulator)
    return (
      <LineDotLeftEmulator {...props} />
    )

  return (
      <LineDotLeft {...props} />
  )
}

export default LineDotLeftHandler
