import { emulatorScreen, mobileScreen } from "utils/styleUtils"

const styles = theme => ({

  QuestionTextAgain: {
    color: '#7c7c7c',
    fontWeight: "400",
    fontSize: '20px',
    fontFamily: "'Oswald', sans-serif",
    paddingBottom: '20px',
    [emulatorScreen(theme)]: {
      fontSize: '12px',
      paddingBottom: '10px'
    },
  },

  answerContainer: {
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
  },

  correctIncorrectIcon: {
    width: "200px",
    [emulatorScreen(theme)]: {
      width: "120px"
    },
  }

})
export default styles;
