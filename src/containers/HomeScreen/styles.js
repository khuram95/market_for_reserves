import { emulatorScreen, mobileScreen } from "../../utils/styleUtils";

const styles = (theme) => ({
  homeTitle: {
    color: "#003e4c",
    fontWeight: "500",
    fontSize: "4rem",
    fontFamily: "'Oswald',sans-serif",
    marginTop: "120px",
    [emulatorScreen(theme)]: {
      marginTop: "80px",
      fontSize: "2.6rem",
    },
    [mobileScreen(theme)]: {
      marginTop: "35px",
      fontSize: "2rem",
    },
  },

  homeScreenContainer: {
    height: "100%",
    minHeight: "100vh",
    backgroundColor: "#ecf2f1",
    position: "relative",
    cursor: "pointer",
  },

  logo: {
    marginTop: "-200px",
    height: "600px",
    width: "130px",
    [emulatorScreen(theme)]: {
      height: "410px",
      marginTop: "-150px",
      width: 60,
    },
    [mobileScreen(theme)]: {
      // height: "200px",
      maxWidth: "600px",
      marginTop: "-140px",
    },
  },

  quizDesc: {
    marginTop: "-200px",
    [emulatorScreen(theme)]: {
      marginTop: "-150px",
    },
    [mobileScreen(theme)]: {
      marginTop: "-140px",
    },
  },

  mruLogo: {
    alignItems: "flex-end",
    padding: "2rem",
    display: "flex",
    [mobileScreen(theme)]: {
      padding: "1rem",
    },
  },

  homeDesc: {
    color: "#003e4c",
    fontWeight: "500",
    fontSize: "2.5rem",
    textAlign: "center",
    fontFamily: "'Oswald',sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: "1.4rem",
    },
    [mobileScreen(theme)]: {
      fontSize: "1rem",
    },
  },

  classAssignmentTitle: {
    color: "#000",
    fontWeight: "400",
    fontSize: "1rem",
    textAlign: "center",
    fontFamily: "'Oswald',sans-serif",
  },

  nameInput: {
    width: "250px",
    padding: "6px",
    fontSize: "20px",
    border: "none",
    borderRadius: "4px",
    marginTop: "10px",
    textAlign: "center",
  },

  forTeachers: {
    position: "absolute",
    marginTop: -80,
    padding: "15px",
    backgroundColor: "#fff",
    [emulatorScreen(theme)]: {
      marginTop: -40,
    },
    [mobileScreen(theme)]: {
      marginTop: -40,
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

  linkImg: {
    width: "30px",
    [emulatorScreen(theme)]: {
      width: "20px",
    },
    [mobileScreen(theme)]: {
      width: "10px",
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

  submitButton: {
    color: "#fff",
    backgroundColor: "#00b1d9",
    fontSize: "36px",
    fontWeight: "500",
    marginTop: "50px",
    padding: "0px 50px",
    borderRadius: "0px",
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: "#056f8a",
    },
    [emulatorScreen(theme)]: {
      fontSize: "26px",
    },
    [mobileScreen(theme)]: {
      fontSize: "20px",
      marginTop: "25px",
      padding: "0 30px",
    },
  },
});
export default styles;
