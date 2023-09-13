import { emulatorScreen, mobileScreen } from "../../utils/styleUtils";

const styles = (theme) => ({
  optionContainer:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0px 0px 0px 50px",
    maxWidth: "35%",
    [emulatorScreen(theme)]: {
      padding: "0px 0px 0px 40px",

    },
    [mobileScreen(theme)]: {
      padding: "0px 0px 0px 30px",
    },
  },
  title: {
    color: "#003E4C",
    fontWeight: "500",
    fontSize: 25,
    textAlign: "center",
    padding: "15px 0px",
    // textTransform: "uppercase",
    fontFamily: "'Oswald',sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: 18
    },
    [mobileScreen(theme)]: {
      fontSize: 16
    },
  },
  optionGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  options: {
    width: "70%",
    padding: "7px 0px",
    margin: "15px 0px",
    textAlign: "center",
    color: "#003E4C",
    fontWeight: "500",
    fontFamily: "'Oswald',sans-serif",
    border: "3px solid #003E4C",
    borderRadius: 9,
    fontSize: 22,
    cursor: "pointer",
    [emulatorScreen(theme)]: {
      fontSize: 14,
      padding: 3,
      margin: "5px 0px",
    },
    [mobileScreen(theme)]: {
      fontSize: 12,
      padding: 3,
      margin: "5px 0px",
    },
  },
});
export default styles;
