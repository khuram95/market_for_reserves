const emulatorScreen = (theme) => theme.breakpoints.down("1150")
const mobileScreen = (theme) => {
  return '@media (max-width:900.95px) and (max-height:440px)'
}

export {
  emulatorScreen,
  mobileScreen
}
