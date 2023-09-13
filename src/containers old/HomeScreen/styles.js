import { emulatorScreen, mobileScreen } from "../../utils/styleUtils";

const styles = (theme) => ({
  homeScreenContainer: {
    height: "100%",
    minHeight: "100vh",
    backgroundColor: "#ecf2f1",
    position: "relative",
    cursor: "pointer",
  },

  innerDiv: {
    flexWrap: "nowrap",
    height: 600,
    justifyContent: "space-evenly",
    marginTop: "5%",
    [emulatorScreen(theme)]: {
      marginTop: 0,
      height: 410,

    },
    [mobileScreen(theme)]: {
      height: '100%'
    },
  },

  logo: {
    height: 300,
    width: 700,
    // paddingRight: 50,
    [emulatorScreen(theme)]: {
      height: 175,
      width: 150,
    },
    [mobileScreen(theme)]: {
      height: 150,
      width: 100,
    },
  },

  quizDesc: {
    // marginTop: "-200px",
    [emulatorScreen(theme)]: {},
    [mobileScreen(theme)]: {},
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
    fontSize: "4rem",
    textAlign: "center",
    fontFamily: "'Oswald',sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: "1.7rem",
    },
    [mobileScreen(theme)]: {
      fontSize: "1.5rem",
    },
  },
  homeDesc2: {
    color: "#003e4c",
    fontWeight: "500",
    fontSize: "2.8rem",
    textAlign: "center",
    fontFamily: "'Oswald',sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: "1.4rem",
    },
    [mobileScreen(theme)]: {
      fontSize: "1rem",
    },
  },
  submitButton: {
    color: "#fff",
    backgroundColor: "#00b1d9",
    fontSize: "36px",
    fontWeight: "500",
    // marginTop: "50px",
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

  forTeachers: {
    position: "absolute",
    marginTop: -80,
    padding: "15px",
    backgroundColor: "#fff",
    [emulatorScreen(theme)]: {
      marginTop: -40,
    },
    [mobileScreen(theme)]: {
      marginTop: -35,
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

  mruLogo: {
    alignItems: "flex-end",
    padding: "2rem",
    display: "flex",
    [mobileScreen(theme)]: {
      padding: "1rem",
    },
  },
});
export default styles;
