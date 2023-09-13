import { emulatorScreen, mobileScreen } from "../../utils/styleUtils";

const styles = (theme) => ({
  mainContainer: {
    height: "70vh",
    [mobileScreen(theme)]: {
      height: "55vh",
    },
  },
  priceContainer: {
    justifyContent: "space-between",
    padding: "10px 50px",
    backgroundColor: "#00ACD7",
    [mobileScreen(theme)]: {
      padding: "10px 30px",
    },
  },
  balanceText: {
    color: "#003E4C",
    fontWeight: "600",
    fontFamily: "'Oswald',sans-serif",
    fontSize: 30,
    [emulatorScreen(theme)]: {
      fontSize: 22
    },
    [mobileScreen(theme)]: {
      fontSize: 20,
    },
  },
  balancePrice: {
    color: "#FFF",
    fontWeight: "600",
    fontFamily: "'Oswald',sans-serif",
    fontSize: 30,
    paddingLeft: 20,
    [emulatorScreen(theme)]: {
      fontSize: 22
    },
    [mobileScreen(theme)]: {
      fontSize: 20,
    },
  },
  answerContainer: {
    display: "flex",
    justifyContent: "center",
    maxHeight: "61%",
    padding: "50px 0px 0px 0px",
    flex: 1,
    [mobileScreen(theme)]: {
      padding: "10px 0px 0px 0px",
    },
  },
  titleContainer: {
    padding: "50px 0px 10px 0px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    padding: "5px 30px",
    textAlign: "center",
    color: "#003E4C",
    fontWeight: "600",
    fontFamily: "'Oswald',sans-serif",
    fontSize: 30,
  },
  nextButton: {
    color: "#fff",
    backgroundColor: "#00b1d9",
    fontSize: "36px",
    fontWeight: "500",
    padding: "0px 20px",
    marginTop: -100,
    borderRadius: "0px",
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: "#056f8a",
    },
    [emulatorScreen(theme)]: {
      fontSize: "26px",
      padding: "0px 35px",
      bottom: "-85px",
      right: "-20px",
    },
    [mobileScreen(theme)]: {
      fontSize: "20px",
      padding: "0px 21px",
      bottom: "-60px",
      right: "-40px",
      marginTop: -20,
    },
  },

  submitButton: {
    [mobileScreen(theme)]: {
      marginTop: -70,
    },
  },

  saveButton: {
    width: "10%",
    alignSelf: "center",
    marginTop: 20,
    [emulatorScreen(theme)]: {
      marginTop: -10,
    },
    [mobileScreen(theme)]: {
      marginTop: -40,
    },
  },
  oneYearContainer: {
    height: "90vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  // answer screen style
  leftContainer:{
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-evenly",
    maxWidth: "38%",
    paddingRight: "5%",
    [emulatorScreen(theme)]: {
      maxWidth: "42%",
    },
    [mobileScreen(theme)]: {
      maxWidth: "46%",
    },
  },
  rightContainer: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    maxWidth: "30%",
    flexDirection: "column",
  },
  inflationText: {
    color: "#003E4C",
    fontWeight: "600",
    fontSize: 30,
    fontFamily: "'Oswald',sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: 20,
    },
    [mobileScreen(theme)]: {
      fontSize: 20
    },
  },
  InflationPercentage: {
    fontSize: 40,
    [emulatorScreen(theme)]: {
      fontSize: 30,
    },
    [mobileScreen(theme)]: {
      fontSize: 20
    },
  },
  tickIcon:{
    height: 40,
    position: "absolute",
    left: -100,
    [emulatorScreen(theme)]: {
      height: 30,
      left: -70,
    },
    [mobileScreen(theme)]: {
      height: 20,
      left: -50,
    },
  },
  optionsGrid: {
    // width: "80%",
    // padding: "5px 2px",
    // justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    position: "relative",
    border: "1px solid #003E4C",
  },
  optionsText: {
    fontWeight: "500",
    fontFamily: "'Oswald',sans-serif",
    color: "#FFF",
    flex: 5,
    padding: "5px 10px",
    // backgroundColor: "green",
    fontSize: 27,
    [emulatorScreen(theme)]: {
      fontSize: 15,
      padding: 5,
    },
    [mobileScreen(theme)]: {
      fontSize: 12,
      padding: 5,
    },
  },
  optionsPrice: {
    fontWeight: "500",
    fontFamily: "'Oswald',sans-serif",
    flex: 2,
    fontSize: 30,
    color: "#003E4D",
    padding: "0px 30px",
    [emulatorScreen(theme)]: {
      fontSize: 16,
      padding: "0px 10px",
    },
    [mobileScreen(theme)]: {
      fontSize: 12,
      padding: "0px 10px",
    },
  },
  questionText:{
    fontFamily: "'Oswald',sans-serif",
    fontSize: 18,
    fontWeight: 400,
    color: "#4C4C4C",
    flex: 3,
    alignSelf: "start",
    [emulatorScreen(theme)]: {
      fontSize: 13,
    },
    [mobileScreen(theme)]: {
      fontSize: 9
    },
  },
  showAnswerContainer: {
    flexDirection: "column",
    height: "80vh",
    [emulatorScreen(theme)]: {
      height: "75vh",
    },
    [mobileScreen(theme)]: {
      height: "80vh",
    },
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 600,
    fontFamily: "Rubik",
    flex: 3,
    color: "#003E4D",
    paddingTop: 15,
    [emulatorScreen(theme)]: {
      fontSize: 12,
      paddingTop: 7
    },
    [mobileScreen(theme)]: {
      fontSize: 9,
      paddingTop: 10
    },
  }
});
export default styles;
