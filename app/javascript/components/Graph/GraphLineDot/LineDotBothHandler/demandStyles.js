import { emulatorScreen, mobileScreen } from "utils/styleUtils"

const styles = theme => ({

  verticalLinesContainer: {
    position: "absolute",
    top: "-52px",
    left: "225px",
    [emulatorScreen(theme)]: {
      top: "-35px",
      left: "150px"
    },
    [mobileScreen(theme)]: {
      top: "-25px",
      left: "100px"
    }
  },

  graphLines: {
    borderLeft: '5px solid #565656',
    borderBottom: '5px solid #565656',
    height: '330px',
    width: '460px',
    position: "relative",
    [emulatorScreen(theme)]: {
      width: "290px",
      height: "210px",
      borderWidth: '3px'
    },
    [mobileScreen(theme)]: {
      width: "200px",
      height: "150px",
      borderWidth: '3px'
    },
  },

  graphYLable: {
    height: '18px',
    position: 'absolute',
    top: '7px',
    left: '-90px',
    [emulatorScreen(theme)]: {
      height: '12px',
      left: '-60px'
    },
    [mobileScreen(theme)]: {
      height: '10px',
      left: '-50px'
    },
  },

  graphXLable: {
    height: '18px',
    position: 'absolute',
    bottom: '-35px',
    right: '5px',
    [emulatorScreen(theme)]: {
      height: '12px',
      bottom: '-25px',
    },
    [mobileScreen(theme)]: {
      height: '10px',
      bottom: '-22px',
    },
  },

  dragLineMessage: {
    height: '130px',
    position: 'absolute',
    right: '-20px',
    top: '80px',
    [emulatorScreen(theme)]: {
      height: '90px',
      right: '-25px',
      top: '50px',
    },
    [mobileScreen(theme)]: {
      top: '25px',
      right: '-25px',
      height: '75px'
    }
  },

  arrows: {
    position: 'absolute',
    height: "22px",
    top: '185px',
    left: '-50px',
    [emulatorScreen(theme)]: {
      top: "117px",
      left: "12px",
      height: "16px"
    },
    [mobileScreen(theme)]: {
      top: "84px",
      left: "8px",
      height: "10px"
    }
  },

  defaultLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "400px",
    width: "8px",
    backgroundColor: "#003e4c",
    borderRadius: '5px',
    [emulatorScreen(theme)]: {
      height: "260px",
      width: "6px"
    },
    [mobileScreen(theme)]: {
      height: "190px",
      width: "6px"
    }
  },

  correctLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "400px",
    width: "8px",
    borderRadius: '5px',
    [emulatorScreen(theme)]: {
      height: "260px",
      width: "6px",
    },
    [mobileScreen(theme)]: {
      height: "190px",
      width: "6px",
    }
  },

  dragableLine: {
    display: "flex",
    justifyContent: "center",
    height: "400px",
    width: "8px",
    position: "relative",
    borderRadius: '5px',
    transform: "rotate(-45deg)",
    [emulatorScreen(theme)]: {
      height: "260px",
      width: "6px",
    },
    [mobileScreen(theme)]: {
      height: "190px",
      width: "6px"
    }
  },

  dragableLineContainer: {
    display: "flex",
    justifyContent: "center",
    width: "6px",
    position: "relative",
    borderRadius: '5px',
    transform: "rotate(-45deg)",
    top: "28px",
    left: "-68px",
    height: "0",
    position: "absolute",
    // [emulatorScreen(theme)]: {
    //   height: "260px",
    //   width: "5px",
    // },
    // [mobileScreen(theme)]: {
    //   height: "190px",
    //   width: "4px"
    // },
  },

  fadedDot: {
    position: "absolute",
    transform: "rotate(45deg)",
    border: "5px solid #003E4C",
    borderRadius: "50%",
    padding: "10px",
    backgroundColor: "#003E4C",
    top: '120px',
    color: "blue",
    [emulatorScreen(theme)]: {
      padding: "7px",
      borderWidth: "4px"
    },
    [mobileScreen(theme)]: {
      padding: "7px",
      borderWidth: "4px"
    }
  },

  correctDot: {
    position: "absolute",
    transform: "rotate(45deg)",
    border: "4px solid #003e4c",
    borderRadius: "50%",
    padding: "10px",
    backgroundColor: "#CACDCE",
    color: "blue",
    // border: "5px solid",
    [emulatorScreen(theme)]: {
      padding: "7px",
      border: "4px solid #003e4c"
    },
    [mobileScreen(theme)]: {
      padding: "6px",
      border: "4px solid #003e4c"
    }
  },

  draggableDot: {
    transform: "rotate(45deg)",
    borderRadius: "50%",
    padding: "10px",
    color: "blue",
    border: "5px solid",
    [emulatorScreen(theme)]: {
      padding: "7px",
      border: "4px solid"
    },
    [mobileScreen(theme)]: {
      padding: "7px",
      border: "4px solid"
    }
  },

  lineIcon: {
    position: "absolute",
    height: "25px",
    bottom: "-25px",
    left: "20px",
    transform: "rotate(45deg)",
    [emulatorScreen(theme)]: {
      left: "12px",
      bottom: "-20px",
      height: "20px",
    },
    [mobileScreen(theme)]: {
      left: "7px",
      bottom: "-18px",
      height: "17px",
    }
  },

  correctLineIcon: {
    position: "absolute",
    height: "25px",
    bottom: "-30px",
    left: "20px",
    transform: "rotate(45deg)",
    [emulatorScreen(theme)]: {
      left: "12px",
      bottom: "-25px",
      height: "20px",
    },
    [mobileScreen(theme)]: {
      left: "7px",
      bottom: "-22px",
      height: "17px",
    }
  }

})
export default styles;
