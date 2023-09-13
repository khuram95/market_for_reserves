import { emulatorScreen, mobileScreen } from "../../utils/styleUtils";

const styles = (theme) => ({
  questionContainer: {
    width: "400px",
    border: "5px solid #003E4C",
    padding: "30px 10px 30px 30px",
    // margin: "100px 10px 0px 40px",
    backgroundColor: "#fff",
    [emulatorScreen(theme)]: {
      width: "210px",
      border: "4px solid #003E4C",
      padding: "20px 10px 20px 20px",
      margin: "70px 38px 0px 25px",
    },
    [mobileScreen(theme)]: {
      width: "183px",
      border: "4px solid #003E4C",
      margin: "30px 38px 0px 62px",
      padding: "15px 13px 16px 16px",
    },
  },

  questionBody: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
  },

  breakingNews: {
    position: "absolute",
    top: "-60px",
    left: "-80px",
    height: "60px",
    [emulatorScreen(theme)]: {
      top: "-40px",
      left: "-50px",
      height: "36px",
    },
    [mobileScreen(theme)]: {
      top: "-35px",
      left: "-43px",
      height: "31px",
    },
  },

  circleIcon: {
    position: "absolute",
    top: "-86px",
    right: "-65px",
    height: "110px",
    [emulatorScreen(theme)]: {
      top: "-66px",
      right: "-52px",
      height: "85px",
    },
    [mobileScreen(theme)]: {
      top: "-40px",
      right: "-35px",
      height: "45px",
    },
  },

  questionText: {
    color: "#515151",
    fontWeight: "400",
    paddingTop: "12px",
    paddingRight: "15px",
    fontSize: "23px",
    fontFamily: "'Oswald', sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: "14px",
    },
    [mobileScreen(theme)]: {
      fontSize: "12px",
      paddingTop: 0,
    },
  },

  subQuestionText: {
    color: "#003E4D",
    fontWeight: "500",
    paddingTop: "20px",
    paddingRight: "15px",
    fontSize: "25px",
    fontFamily: "'Oswald', sans-serif",
    [emulatorScreen(theme)]: {
      fontSize: "15px",
    },
    [mobileScreen(theme)]: {
      fontSize: "13px",
      paddingTop: "8px",
    },
  },
});
export default styles;
