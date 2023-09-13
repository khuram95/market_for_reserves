import { emulatorScreen, mobileScreen } from "../../../../utils/styleUtils"

const styles = theme => ({

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

})
export default styles;
