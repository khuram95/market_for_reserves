import { emulatorScreen, mobileScreen } from 'utils/styleUtils'

const styles = theme => ({

  homeTitle: {
    color: '#003e4c',
    fontWeight: '500',
    fontSize: '4rem',
    fontFamily: "'Oswald',sans-serif",
    marginTop: '120px',
    [emulatorScreen(theme)]: {
      marginTop: '80px',
      fontSize: '2.6rem'
    },
    [mobileScreen(theme)]: {
      marginTop: '35px',
      fontSize: '2rem'
    }
  },

  homeScreenContainer: {
    height: "100%",
    minHeight: '100vh',
    backgroundColor: '#ecf2f1',
    position: "relative",
    cursor: "pointer"
  },

  logo: {
    marginTop: "-200px",
    height: "600px",
    [emulatorScreen(theme)]: {
      height: "380px",
      marginTop: "-150px"
    },
    [mobileScreen(theme)]: {
      // height: "200px",
      maxWidth: "600px",
      marginTop: "-140px"
    }
  },

  quizDesc: {
    marginTop: '-200px',
    [emulatorScreen(theme)]: {
      marginTop: "-150px"
    },
    [mobileScreen(theme)]: {
      marginTop: "-140px"
    }
  },

  mruLogo: {
    alignItems: 'flex-end',
    padding: '2rem',
    display: "flex",
    [mobileScreen(theme)]: {
      padding: '1rem',
    }
  },

  homeDesc: {
    color: '#003e4c',
    fontWeight: '500',
    fontSize: '1.7rem',
    textAlign: 'center',
    fontFamily: "'Oswald',sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: '1.4rem'
    },
    [mobileScreen(theme)]: {
      fontSize: '1rem'
    }
  },

  classAssignmentTitle: {
    color: '#000',
    fontWeight: '400',
    fontSize: '1rem',
    textAlign: 'center',
    fontFamily: "'Oswald',sans-serif",
  },

  nameInput: {
    width: "250px",
    padding: "6px",
    fontSize: "20px",
    border: "none",
    borderRadius: "4px",
    marginTop: "10px",
    textAlign: "center"
  },

  submitButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    fontSize: '36px',
    fontWeight: '500',
    marginTop: '50px',
    padding: '0px 50px',
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
      marginTop: '25px',
      padding: '0 30px'
    }
  }

})
export default styles;
