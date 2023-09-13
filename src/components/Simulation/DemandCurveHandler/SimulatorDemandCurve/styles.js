import { emulatorScreen, mobileScreen } from "../../../../utils/styleUtils"

const styles = theme => ({
  verticalLinesContainer: {
    position: "absolute",
    top: "-30px",
    left: "210px",
    transition: "left 1s",
    [mobileScreen(theme)]: {
      top: "-20px",
    },
  },

  defaultLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "400px",
    width: "8px",
    backgroundColor: "#003e4c",
    borderRadius: '5px'
  },

  correctLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "400px",
    width: "8px",
    borderRadius: '5px',
  },

  dragableLine: {
    display: "flex",
    justifyContent: "center",
    height: "280px",
    width: "6px",
    position: "relative",
    borderRadius: '5px',
    backgroundColor: "#fff",
    transform: "rotate(-45deg)",
    [emulatorScreen(theme)]: {
      width: "5px",
      height: "200px",
      borderWidth: "3px"
    },
    [mobileScreen(theme)]: {
      height: "150px",
    },
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
  },

  draggableDot: {
    position: "absolute",
    transform: "rotate(45deg)",
    // border: "5px solid #003e4c",
    borderRadius: "50%",
    padding: "12px",
    backgroundColor: "#00b1d9",
    color: "blue",
    [emulatorScreen(theme)]: {
      padding: "10px",
    },
  },

  crossMark: {
    position: "absolute",
    borderRadius: "50%",
    transform: "rotate(45deg)",
    width: "35px",
    height: "35px",
    [emulatorScreen(theme)]: {
      width: "25px",
      height: "30px",
    },
  },

  lineIcon: {
    position: "absolute",
    height: "25px",
    bottom: "-35px",
    left: "18px",
    filter: "brightness(10)",
    transform: "rotate(45deg)",
    [emulatorScreen(theme)]: {
      height: "20px",
      bottom: "-25px",
      left: "12px",
    },
    [mobileScreen(theme)]: {
      height: "17px",
      bottom: "-20px",
      left: "10px",
    },
  },

  handCursorDesign: {
    position: 'absolute',
    right: '-5px',
    top: '200px',
    transform: 'rotate(45deg)',
    width: '40px',
    transition: 'top 1s',
    [emulatorScreen(theme)]: {
      width: "25px",
      right: "0px",
      top: "140px"
    },
    [mobileScreen(theme)]: {
      top: "110px"
    },
  }

})
export default styles;
