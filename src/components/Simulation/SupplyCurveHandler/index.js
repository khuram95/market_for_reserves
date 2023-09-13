import React from 'react'
import SimulatorSupplyCurve from './SimulatorSupplyCurve'
import { emulatorScreen, mobileScreen } from "../../../utils/styleUtils"
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const SupplyCurveHandler = (props) => {

  const theme = useTheme();
  const isEmulator = useMediaQuery(emulatorScreen(theme));
  const isMobile = useMediaQuery(mobileScreen(theme));

  // heightOfLine={200}
  if (isMobile)
    return (
      <SimulatorSupplyCurve
        {...props}
        key={isMobile}
        dotCenterPosition={(170 - 30) / 2}
        dotShiftVariant={50}
        lineDefaultPosition={90}
        lineShiftVariant={30}
      />
    )

  // heightOfLine={200}
  if (isEmulator)
    return (
      <SimulatorSupplyCurve
        {...props}
        key={isEmulator}
        dotCenterPosition={(200 - 30) / 2}
        dotShiftVariant={50}
        lineDefaultPosition={120}
        lineShiftVariant={30}
      />
    )

// heightOfLine={280}
  return(
    <SimulatorSupplyCurve
      {...props}
      dotCenterPosition={(280 - 30) / 2}
      dotShiftVariant={70}
      lineDefaultPosition={210}
      lineShiftVariant={40}
    />
  )
}

export default SupplyCurveHandler
