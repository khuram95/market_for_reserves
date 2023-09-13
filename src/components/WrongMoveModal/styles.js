import { emulatorScreen, mobileScreen } from "../../utils/styleUtils";

const styles = (theme) => ({
  modalDescription: {
    color: "#fff",
    fontWeight: "300",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.5rem",
    letterSpacing: "1px",
  },

  backButton: {
    color: "#fff",
    backgroundColor: "#00b1d9",
    fontSize: "18px",
    fontWeight: "500",
    marginTop: "1rem",
    left: "230px",
    padding: "5px 25px",
    borderRadius: "10px",
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: "#056f8a",
    },
  },

  modal: {
    position: "absolute",
    height: "100vh",
    width: "100%",
    padding: theme.spacing(2, 4, 3),
    border: "0px",
    outline: "none",
    "&:focus": {
      border: "0px",
      outline: "none",
    },
  },
});
export default styles;
