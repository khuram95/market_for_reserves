import { emulatorScreen, mobileScreen } from "utils/styleUtils"

const styles = theme => ({

  resultTitle: {
    fontFamily: "'Oswald'",
    fontSize: "50px",
    fontWeight: "500"
  },

  totalScore: {
    fontFamily: "'Oswald'",
    fontSize: "60px",
    fontWeight: "500",
    [emulatorScreen(theme)]: {
      fontSize: "40px",
    },
    [mobileScreen(theme)]: {
      fontSize: "33px",
      paddingRight: "0.5rem",
    }
  },

  score: {
    fontFamily: "'Oswald'",
    fontSize: "45px",
    fontWeight: "500",
    paddingRight: "1rem",
    [emulatorScreen(theme)]: {
      fontSize: "30px",
      paddingRight: "0.5rem",
    },
    [mobileScreen(theme)]: {
      fontSize: "25px",
      paddingRight: "0.5rem",
    }
  },

  resultScreenContainer: {
    height: "100%",
    minHeight: '100vh',
    backgroundColor: '#ecf2f1',
    fontFamily: "'Oswald'",
    fontSize: "50px",
    color: "#003e4c",
    padding: "2rem",
    [emulatorScreen(theme)]: {
      padding: "1rem",
    },
    [mobileScreen(theme)]: {
      padding: "0.5rem",
    }
  },

  downloadImage: {
    width: "33px",
    marginRight: "15px",
    marginTop: "-5px",
    [emulatorScreen(theme)]: {
      width: "25px",
      marginRight: "10px",
      marginTop: "-4px",
    },
    [mobileScreen(theme)]: {
      width: "19px"
    }
  },

  saveButton: {
    color: '#fff',
    backgroundColor: '#003e4c',
    fontSize: '30px',
    fontWeight: '500',
    padding: '0px 20px',
    borderRadius: '0px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    },
    [emulatorScreen(theme)]: {
      fontSize: '22px',
      padding: '0px 15px',
    },
    [mobileScreen(theme)]: {
      fontSize: '18px',
    }
  },

  classAssignmentTitle: {
    color: '#003e4c',
    fontWeight: '400',
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: "rubik",
    [emulatorScreen(theme)]: {
      fontSize: "22px",
    },
    [mobileScreen(theme)]: {
      fontSize: "18px",
    }
  },

  errorText: {
    paddingTop: "10px",
    color: "red",
    fontSize: "20px",
    [emulatorScreen(theme)]: {
      fontSize: "17px"
    }
  },

  studentName: {
    color: '#003e4c',
    fontWeight: '300',
    fontSize: '40px',
    textAlign: 'center',
    fontFamily: "rubik",
    [mobileScreen(theme)]: {
      fontSize: "30px",
    }
  },

  nameInput: {
    width: "450px",
    padding: "6px",
    fontSize: "30px",
    border: "none",
    color: '#003e4c',
    marginRight: "1rem",
    borderRadius: "4px",
    textAlign: "center",
    fontWeight: "100",
    fontFamily: "rubik",
    [emulatorScreen(theme)]: {
      width: "330px",
      fontSize: "22px",
      marginRight: "0.8rem",
      padding: "5px",
    },
    [mobileScreen(theme)]: {
      width: "260px",
      padding: "5px",
      fontSize: "18px",
      marginRight: "0.5rem"

    }

  },

  answerNumber: {
    fontFamily: "rubik",
    fontSize: "30px",
    fontWeight: "500",
    [emulatorScreen(theme)]: {
      fontSize: "22px",
    },
    [mobileScreen(theme)]: {
      fontSize: "18px",
    }
  },

  answerLogo: {
    width: "30px",
    padding: "0 1rem",
    [emulatorScreen(theme)]: {
      width: "24px",
      padding: "0 0.7rem",
    },
    [mobileScreen(theme)]: {
      width: "18px",
    }
  },

  questionAnswerContainer: {
    maxHeight: "350px",
    maxWidth: "600px",
    padding: "50px 0px",
    [emulatorScreen(theme)]: {
      maxHeight: "270px",
      maxWidth: "440px",
      padding: "40px 0px",
    },
    [mobileScreen(theme)]: {
      maxHeight: "180px",
      maxWidth: "380px",
      padding: "20px 0px",
    }
  },

  nameContainer: {
    marginTop: "3rem",
    [mobileScreen(theme)]: {
      marginTop: "2rem",
    }
  }

})
export default styles;
