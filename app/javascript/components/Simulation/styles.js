import { emulatorScreen, mobileScreen } from "utils/styleUtils"

const styles = theme => ({
  tutorialGrid: {
    display: 'flex',
    alignSelf: 'flex-start'
  },
  tutorialText: {
    color: '#fff',
    fontSize: '35px',
    fontWeight: '500',
    marginTop: '15px',
    padding: '0px 20px',
    fontFamily: "'Oswald', sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: '25px',
    },
    [mobileScreen(theme)]: {
      fontSize: '20px',
      marginTop: '10px',
      padding: '0px 10px',
    },
  },
  youCanImg: {
    height: '60px',
    [emulatorScreen(theme)]: {
      height: '40px',
    },
    [mobileScreen(theme)]: {
      height: '35px',
      marginTop: '-10px'
    }
  },
  shiftTheCurve: {
    height: '80px',
    marginBottom: "20px",
    [emulatorScreen(theme)]: {
      height: '60px',
    },
    [mobileScreen(theme)]: {
      marginBottom: "10px",
      height: '50px',
      marginTop: '-10px'
    }
  },
  textContainer: {
    paddingTop: "50px",
    flex: '1'
  },
  graphContainer: {
    // paddingTop: "50px",
    flex: '1'
  },
  questionTitle: {
    color: '#fff',
    fontWeight: '500',
    textAlign: "center",
    fontSize: '3rem',
    marginBottom: "50px",
    fontFamily: "'Oswald',sans-serif"
  },
  questionDesc: {
    color: '#003e4c',
    fontWeight: '500',
    fontSize: '2rem',
    fontFamily: "'Oswald',sans-serif"
  },
  questionText: {
    color: '#003e4c',
    fontWeight: '500',
    fontSize: '2.4rem',
    padding: "0px 20px 20px 20px",
    marginTop: "-10px",
    fontFamily: "'Oswald',sans-serif"
  },
  questionContainer: {
    width: '390px',
  },
  questionBody: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  graphDiv: {
    display: 'flex',
    alignItems: 'center',
    // marginLeft: '100px',
    marginBottom: '50px',
    justifyContent: 'space-around'
  },
  graphDivContainer: {
    width: "380px",
    marginLeft: "100px",
    [emulatorScreen(theme)]: {
      width: "250px",
      marginLeft: "60px",
    },
    [mobileScreen(theme)]: {
      width: "185px",
      marginRight: "20px",
      marginLeft: "50px",
    },
  },
  graphLines: {
    borderLeft: '5px solid #fff',
    borderBottom: '5px solid #fff',
    height: '250px',
    width: '360px',
    position: "relative",
    [emulatorScreen(theme)]: {
      width: "240px",
      height: "170px",
      borderWidth: "3px"
    },
    [mobileScreen(theme)]: {
      width: "180px",
      height: "125px",
      borderWidth: "3px"
    },
  },
  graphYLable: {
    height: '18px',
    position: 'absolute',
    top: '7px',
    left: '-90px',
    [emulatorScreen(theme)]: {
      height: "12px",
      left: '-60px',
    },
    [mobileScreen(theme)]: {
      height: "10px",
      left: '-50px',
    },
  },
  graphXLable: {
    height: '18px',
    position: 'absolute',
    bottom: '-35px',
    right: '5px',
    [emulatorScreen(theme)]: {
      height: "12px",
      bottom: '-25px',
    },
    [mobileScreen(theme)]: {
      height: "10px",
      bottom: '-23px',
    },
  },
  submitButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    fontSize: '36px',
    fontWeight: '500',
    marginTop: '50px',
    padding: '0px 20px',
    borderRadius: '0px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    },

    [emulatorScreen(theme)]: {
      fontSize: '30px',
      marginTop: '20px',
    },

    [mobileScreen(theme)]: {
      fontSize: '20px',
      marginTop: '0px',
    },
  },

  dragLineMessage: {
    height: '100px',
    position: 'absolute',
    bottom: '-35px',
    right: '-40px',
    top: '60px',
    [emulatorScreen(theme)]: {
      top: '30px',
      height: '80px',
    },
    [mobileScreen(theme)]: {
      top: '10px',
      height: '65px',
      right: '-20px',
    },
  }
})
export default styles;
