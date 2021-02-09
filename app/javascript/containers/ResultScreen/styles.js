import { emulatorScreen, mobileScreen } from "utils/styleUtils";

const styles = (theme) => ({
  resultTitle: {
    fontFamily: "'Oswald'",
    fontSize: "50px",
    fontWeight: "500",
  },

  totalScore: {
    fontFamily: "'Oswald'",
    fontSize: "60px",
    fontWeight: "500",
    [emulatorScreen(theme)]: {
      fontSize: "40px",
    },
    [mobileScreen(theme)]: {
      fontSize: "28px",
      paddingRight: "0.5rem",
    },
  },

  sideBarLinkText: {
    fontFamily: "'Oswald'",
    fontSize: "16px",
    marginLeft: "12px",
    fontWeight: "500",
    color: "#003e4c",
    lineHeight: 1.1,
    [emulatorScreen(theme)]: {
      fontSize: "12px",
      lineHeight: "1",
    },
    [mobileScreen(theme)]: {
      fontSize: "10px",
      lineHeight: "1",
    },
  },

  sideBarLink: {
    display: "flex",
    alignItems: "center",
    marginTop: "15px",
    cursor: "pointer",
    textDecoration: "none!important",
    [emulatorScreen(theme)]: {
      marginTop: "8px",
    },
    [mobileScreen(theme)]: {
      marginTop: "6px",
    },
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
      fontSize: "20px",
      paddingRight: "0.5rem",
    },
  },

  resultScreenContainer: {
    height: "100%",
    minHeight: "100vh",
    overflow: "auto",
    backgroundColor: "#ecf2f1",
    fontFamily: "'Oswald'",
    fontSize: "50px",
    position: "relative",
    color: "#003e4c",
    padding: "2rem",
    [emulatorScreen(theme)]: {
      padding: "1rem",
    },
    [mobileScreen(theme)]: {
      padding: "0.5rem",
    },
  },

  leftBarContainer: {
    position: "absolute",
    left: "0",
    top: "90px",
    [emulatorScreen(theme)]: {
      top: "60px",
    },
    [mobileScreen(theme)]: {
      top: "45px",
    },
  },

  forStudents: {
    backgroundColor: "#F7F7F7",
    padding: "15px 80px 10px 35px",
    [emulatorScreen(theme)]: {
      padding: "10px 35px 10px 15px",
    },
    [mobileScreen(theme)]: {
      padding: "5px 30px 5px 15px",
    },
  },

  forTeachers: {
    backgroundColor: "#F7F7F7",
    padding: "15px 80px 40px 35px",
    marginTop: "25px",
    [emulatorScreen(theme)]: {
      marginTop: "20px",
      padding: "10px 35px 25px 15px",
    },
    [mobileScreen(theme)]: {
      padding: "5px 30px 20px 15px",
    },
  },

  linkImg: {
    width: "30px",
    [emulatorScreen(theme)]: {
      width: "20px",
    },
    [mobileScreen(theme)]: {
      width: "10px",
    },
  },

  logoImg: {
    width: "110px",
    [emulatorScreen(theme)]: {
      width: "90px",
    },
    [mobileScreen(theme)]: {
      width: "60px",
    },
  },

  forStudentsTitle: {
    color: "#003e4c",
    fontWeight: "500",
    fontSize: "1.5rem",
    fontFamily: "'Oswald',sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: "1rem",
    },
    [mobileScreen(theme)]: {
      fontSize: "0.7rem",
    },
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
      width: "19px",
    },
  },

  saveButton: {
    color: "#fff",
    backgroundColor: "#003e4c",
    fontSize: "30px",
    fontWeight: "500",
    padding: "0px 20px",
    borderRadius: "0px",
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: "#056f8a",
    },
    [emulatorScreen(theme)]: {
      fontSize: "22px",
      padding: "0px 15px",
    },
    [mobileScreen(theme)]: {
      fontSize: "16px",
    },
  },

  classAssignmentTitle: {
    color: "#003e4c",
    fontWeight: "400",
    fontSize: "30px",
    textAlign: "center",
    fontFamily: "rubik",
    [emulatorScreen(theme)]: {
      fontSize: "22px",
    },
    [mobileScreen(theme)]: {
      fontSize: "16px",
    },
  },

  errorText: {
    paddingTop: "10px",
    color: "red",
    fontSize: "20px",
    [emulatorScreen(theme)]: {
      fontSize: "12px",
    },
    [mobileScreen(theme)]: {
      fontSize: "10px",
    },
  },

  studentName: {
    color: "#003e4c",
    fontWeight: "300",
    fontSize: "40px",
    textAlign: "center",
    fontFamily: "rubik",
    [mobileScreen(theme)]: {
      fontSize: "30px",
    },
  },

  nameInput: {
    width: "450px",
    padding: "6px",
    fontSize: "30px",
    border: "none",
    color: "#003e4c",
    marginRight: "1rem",
    borderRadius: "4px",
    textAlign: "center",
    fontWeight: "100",
    fontFamily: "rubik",
    [emulatorScreen(theme)]: {
      width: "300px",
      fontSize: "22px",
      marginRight: "0.8rem",
      padding: "5px",
    },
    [mobileScreen(theme)]: {
      width: "220px",
      padding: "5px",
      fontSize: "16px",
      marginRight: "0.3rem",
    },
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
    },
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
    },
  },

  questionAnswerContainer: {
    maxHeight: "350px",
    maxWidth: "600px",
    padding: "50px 0px",
    [emulatorScreen(theme)]: {
      maxHeight: "220px",
      maxWidth: "440px",
      padding: "15px 0px",
    },
    [mobileScreen(theme)]: {
      maxHeight: "160px",
      maxWidth: "350px",
      padding: "5px 0 12px 0",
    },
  },

  quizResultContainer: {
    height: "85vh",
    flexWrap: "nowrap",
  },

  nameContainer: {
    marginTop: "3rem",
    [emulatorScreen(theme)]: {
      marginTop: "1.5rem",
    },
    [mobileScreen(theme)]: {
      marginTop: "1rem",
    },
  },

  mruLogo: {
    alignItems: "flex-end",
    display: "flex",
  },

  mruLogoContainer: {
    height: "8vh",
  },

  homeDesc: {
    color: "#003e4c",
    fontWeight: "500",
    fontSize: "1.7rem",
    textAlign: "center",
    fontFamily: "'Oswald',sans-serif",
    marginBottom: "1.5rem",
    [emulatorScreen(theme)]: {
      fontSize: "1.4rem",
      marginBottom: "1rem",
    },
    [mobileScreen(theme)]: {
      fontSize: "1rem",
      marginBottom: "0rem",
    },
  },
});
export default styles;
