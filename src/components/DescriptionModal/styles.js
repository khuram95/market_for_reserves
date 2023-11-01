import { emulatorScreen, mobileScreen } from "../../utils/styleUtils";

const styles = (theme) => ({
  quizScreenContainer: {
    height: "100vh",
    backgroundColor: "#ecf2f1",
  },

  questionImg: {
    width: "150px",
    height: "150px",
    position: "absolute",
    zIndex: "5",
  },

  includedTitle: {
    color: "#003e4c",
    fontSize: "46px",
    fontWeight: "500",
    fontFamily: "Oswald",
  },

  serviceTitle: {
    color: "#003e4c",
    fontSize: "20px",
    fontWeight: "500",
    fontFamily: "Oswald",
    marginBottom: "4px",
  },

  serviceDesc: {
    color: "#003e4c",
    fontSize: "15px",
    fontWeight: "400",
    fontFamily: "Rubik",
    maxWidth: "350px",
    lineHeight: "1.2",
  },

  dropImageStyle: {
    width: "400px",
    height: "100px",
  },

  draggableDrop: {
    border: "3px solid #003e4c",
    borderRadius: "6px",
    backgroundColor: "#fff",
    width: "410px",
  },

  answerTitleIcon: {
    width: "90px",
    height: "40px",
    marginRight: "1.5rem",
  },

  answerTitleContainer: {
    backgroundColor: "#003e4c",
    padding: "0.7rem 1rem",
  },

  answerTitleText: {
    color: "#fff",
    fontSize: "25px",
    fontWeight: "500",
    fontFamily: "Oswald",
  },

  answerDescContainer: {
    padding: "0 1rem 1rem 1rem",
    height: "210px",
  },

  droppableCircle: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    marginTop: "1rem",
    border: "3px dashed #003e4c",
  },

  droppableAnswer: {
    width: "79px",
    height: "79px",
    borderRadius: "50%",
    marginTop: "1rem",
  },

  submitButton: {
    backgroundColor: "#00b1d9",
    color: "#fff",
    fontSize: "30px",
    fontWeight: "500",
    padding: "0px 20px",
    borderRadius: "5px",
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: "#056f8a",
    },
    [mobileScreen(theme)]: {
      fontSize: "18px",
      padding: "0px 10px",
    },
  },

  evaluatorModalContainer: {
    width: "40%",
    padding: "2rem 3rem",
    backgroundColor: "#fff",
    borderRadius: "25px",
    [mobileScreen(theme)]: {
      padding: "1rem 2rem",
      width: "45%",
      // width: "240px",
    },
  },

  evalInnerModal: {
    padding: "30px 0px",
    [mobileScreen(theme)]: {
      padding: "10px 0px",
    }
  },

  evalDescHeading: {
    color: "#003e4c",
    fontFamily: "Rubik",
    fontWeight: "bold",
    fontSize: 17,
    [mobileScreen(theme)]: {
      fontSize: 11,
    },
  },

  evalDesc: {
    color: "#003e4c",
    fontFamily: "Rubik",
    fontWeight: "bold",
    fontSize: 17,
    [mobileScreen(theme)]: {
      fontSize: 11,
    },
  },

  correctIncorrectIcon: {
    height: "150px",
    // marginLeft: "10%",
    [mobileScreen(theme)]: {
      height: 70,
    },
  },
  yearPrice: {
    color: "#003E4C",
    fontWeight: "400",
    paddingTop: "10px 0px",
    fontSize: 28,
    fontFamily: "'Oswald',sans-serif",
    textAlign: "center",
    [emulatorScreen(theme)]: {},
    [mobileScreen(theme)]: {},
  },
});

export default styles;
