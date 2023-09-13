import { emulatorScreen, mobileScreen } from "../../../utils/styleUtils"

const styles = theme => ({

  questionTitle: {
    color: '#003E4C',
    fontWeight: '500',
    fontSize: '2rem',
    padding: "60px 20px 60px 0",
    fontFamily: "'Oswald',sans-serif",
    marginLeft: '100px',
    [emulatorScreen(theme)]: {
      padding: "30px 20px 30px 0",
      marginLeft: '62px',
      fontSize: '1.3rem',
    },
    [mobileScreen(theme)]: {
      padding: "20px 0px 20px 0",
      marginLeft: '52px',
      fontSize: "1rem"
    }
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

  quizContainer: {
    marginRight: "100px",
    alignSelf: "flex-start",
    [emulatorScreen(theme)]: {
      marginRight: "40px"
    },
  },

})
export default styles;
