import { emulatorScreen, mobileScreen } from "../../utils/styleUtils"

const styles = theme => ({

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

  submitButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    position: 'absolute',
    bottom: '-100px',
    right: '0',
    fontSize: '36px',
    fontWeight: '500',
    padding: '0px 20px',
    borderRadius: '0px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    },
    [emulatorScreen(theme)]: {
      fontSize: '26px',
      bottom: '-85px',
      right: '-20px',
    },
    [mobileScreen(theme)]: {
      fontSize: '20px',
      padding: "0px 10px",
      bottom: '-60px',
      right: '-40px',
    },
  },

  nextButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    position: 'absolute',
    bottom: '-100px',
    right: '0',
    fontSize: '36px',
    fontWeight: '500',
    padding: '0px 41px',
    borderRadius: '0px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    },
    [emulatorScreen(theme)]: {
      fontSize: '26px',
      padding: "0px 35px",
      bottom: '-85px',
      right: '-20px',

    },
    [mobileScreen(theme)]: {
      fontSize: '20px',
      padding: "0px 21px",
      bottom: '-60px',
      right: '-40px',
    },
  }

})
export default styles;
