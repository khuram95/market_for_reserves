import { emulatorScreen, mobileScreen } from "utils/styleUtils"

const styles = theme => ({

  questionTitle: {
    color: '#003E4C',
    fontWeight: '500',
    fontSize: '2rem',
    padding: "60px 20px 60px 0",
    fontFamily: "'Oswald',sans-serif",
    [emulatorScreen(theme)]: {
      padding: "30px 20px 30px 0",
      fontSize: '1.3rem',
    },
    [mobileScreen(theme)]: {
      padding: "20px 0px 20px 0",
      fontSize: "1rem"
    }
  },

  graphContainer: {
    paddingTop: "60px"
  },

  questionContainer: {
    width: '350px',
    border: '5px solid #003E4C',
    padding: '30px 10px 30px 30px',
    margin: '100px 10px 0px 40px',
    backgroundColor: '#fff',
    [emulatorScreen(theme)]: {
      width: '210px',
      border: '4px solid #003E4C',
      padding: '20px 10px 20px 20px',
      margin: '70px 38px 0px 25px',
    },
    [mobileScreen(theme)]: {
      width: "183px",
      border: "4px solid #003E4C",
      margin: "30px 38px 0px 62px",
      padding: "15px 13px 16px 16px"
    }
  },
  questionContainerHidden: {
    width: '360px',
    border: 'none',
    padding: '30px 10px 30px 30px',
    margin: '100px 10px 0px 40px',
    [emulatorScreen(theme)]: {
      width: '218px',
      // border: '5px solid #003E4C',
      padding: '20px 10px 20px 20px',
      margin: '70px 38px 0px 25px',
    },
    [mobileScreen(theme)]: {
      width: "190px",
      // border: "4px solid #003E4C",
      margin: "30px 38px 0px 62px",
      padding: "15px 13px 16px 16px"
    }
  },
  questionBody: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },

  breakingNews: {
    position: 'absolute',
    top: '-60px',
    left: '-80px',
    height: '60px',
    [emulatorScreen(theme)]: {
      top: '-40px',
      left: '-50px',
      height: '36px',
    },
    [mobileScreen(theme)]: {
      top: "-35px",
      left: "-43px",
      height: "31px"
    }
  },

  circleIcon: {
    position: 'absolute',
    top: '-115px',
    right: '-85px',
    height: '140px',
    [emulatorScreen(theme)]: {
      top: '-66px',
      right: '-52px',
      height: '85px',
    },
    [mobileScreen(theme)]: {
      top: "-55px",
      right: "-49px",
      height: "75px",
    }
  },
  questionText: {
    color: '#565656',
    fontWeight: "400",
    paddingTop: "12px",
    fontSize: '27px',
    fontFamily: "'Oswald', sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: '16px',
    },
    [mobileScreen(theme)]: {
      fontSize: '14px',
      paddingTop: "8px",
    },
  },
  subQuestionText: {
    color: '#00b1d9',
    fontWeight: "400",
    paddingTop: "12px",
    fontSize: '27px',
    fontFamily: "'Oswald', sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: '16px',
    },
    [mobileScreen(theme)]: {
      fontSize: '14px',
      paddingTop: "8px",
    },
  },
  QuestionTextAgain: {
    color: '#7c7c7c',
    fontWeight: "400",
    // paddingTop: "12px",
    fontSize: '20px',
    fontFamily: "'Oswald', sans-serif",
    paddingBottom: '20px',
    [emulatorScreen(theme)]: {
      fontSize: '12px',
      paddingBottom: '10px'
    },
  },
  answerContainer: {
    // marginTop: '100px',
    width: '350px',
    border: '5px solid transparent',
    padding: '30px 10px 30px 30px',
    margin: '100px 10px 0px 40px',
    [emulatorScreen(theme)]: {
      width: '210px',
      margin: '40px 10px 0px 41px'
    },
    [mobileScreen(theme)]: {
      width: '240px',
      margin: '10px 10px 0px 30px',
      padding: '20px 10px 10px 20px'
    }
  },
  curveShiftingText: {
    color: '#003E4C',
    fontWeight: "600",
    margin: "5px 0 10px 0",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.8rem",
    [emulatorScreen(theme)]: {
      fontSize: '17px',
    },
  },

  briefNessHeading: {
    color: '#003E4C',
    fontWeight: "600",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.4rem",
    marginTop: "15px",
    marginBottom: "15px",
    [emulatorScreen(theme)]: {
      fontSize: '14px',
    },
  },
  briefNess: {
    color: '#003E4C',
    fontWeight: "600",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.0rem",
    [emulatorScreen(theme)]: {
      fontSize: '9.6px',
    },
    // marginRight: "50px"
  },
  graphDiv: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '100px',
    marginBottom: '50px',
    justifyContent: 'space-around',
    [emulatorScreen(theme)]: {
      marginLeft: '60px',
      marginBottom: '25px',
    },
    [mobileScreen(theme)]: {
      marginLeft: '50px',
    },
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
  graphP1Lable: {
    fontSize: '24px',
    fontWeight: '600',
    position: 'absolute',
    color: '#003e4c',
    top: '135px',
    left: '-40px',
    [emulatorScreen(theme)]: {
      top: '80px',
      left: '-27px',
      fontSize: '18px'
    },
    [mobileScreen(theme)]: {
      top: '55px',
      left: '-24px',
      fontSize: '16px'
    },
  },
  graphP2Lable: {
    fontSize: '24px',
    fontWeight: '600',
    position: 'absolute',
    color: '#003e4c',
    top: '200px',
    left: '-40px',
    [emulatorScreen(theme)]: {
      fontSize: '18px',
      left: '-27px',
    },
    [mobileScreen(theme)]: {
      left: '-24px',
      fontSize: '16px'
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
  graphQ1Lable: {
    fontSize: '24px',
    fontWeight: '600',
    position: 'absolute',
    color: '#003e4c',
    bottom: '-40px',
    left: '215px',
    [emulatorScreen(theme)]: {
      bottom: '-28px',
      left: '137px',
      fontSize: '18px'
    },
    [mobileScreen(theme)]: {
      bottom: '-26px',
      left: '89px',
      fontSize: '16px'
    },
  },
  graphQ2Lable: {
    fontSize: '24px',
    fontWeight: '600',
    position: 'absolute',
    color: '#003e4c',
    bottom: '-40px',
    left: '280px',
    [emulatorScreen(theme)]: {
      bottom: '-28px',
      fontSize: '18px'
    },
    [mobileScreen(theme)]: {
      bottom: '-26px',
      // left: '137px',
      fontSize: '16px'
    },
  },
  submitButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    fontSize: '36px',
    fontWeight: '500',
    marginTop: '40px',
    padding: '0px 20px',
    borderRadius: '0px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    },
    [emulatorScreen(theme)]: {
      fontSize: '26px'
    },
    [mobileScreen(theme)]: {
      fontSize: '20px',
      padding: "0px 10px"
    },
  },
   modalDescription: {
    color: '#fff',
    fontWeight: "300",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.5rem",
    letterSpacing: '1px'
  },

  backButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    fontSize: '18px',
    fontWeight: '500',
    marginTop: '1rem',
    left: '230px',
    padding: '5px 25px',
    borderRadius: '10px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    }
  },
  modal: {
    position: 'absolute',
    height: "100vh",
    width: "100%",
    padding: theme.spacing(2, 4, 3),
    border: '0px',
    outline: 'none',
    "&:focus": {
      border: '0px',
      outline: 'none'
    }
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
  },

  quizContainer: {
    marginRight: "100px",
    alignSelf: "flex-start",
    [emulatorScreen(theme)]: {
      marginRight: "40px"
    },
  },

  correctIncorrectIcon: {
    width: "200px",
    [emulatorScreen(theme)]: {
      width: "120px"
    },
  }

})
export default styles;
