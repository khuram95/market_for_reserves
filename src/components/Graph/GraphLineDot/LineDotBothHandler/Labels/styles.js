import { emulatorScreen, mobileScreen } from "../../../../../utils/styleUtils";

const styles = (theme) => ({
  graphYLable: {
    height: "18px",
    position: "absolute",
    top: "7px",
    left: "-90px",
    [emulatorScreen(theme)]: {
      height: "12px",
      left: "-60px",
    },
    [mobileScreen(theme)]: {
      height: "10px",
      left: "-50px",
    },
  },

  graphP1Lable: {
    fontSize: "17px",
    fontWeight: "600",
    position: "absolute",
    color: "#003e4c",
    top: "175px",
    left: "-115px",
    [emulatorScreen(theme)]: {
      top: "80px",
      left: "-27px",
      fontSize: "18px",
    },
    [mobileScreen(theme)]: {
      top: "60px",
      left: "-22px",
      fontSize: "13px",
    },
  },

  graphP2Lable: {
    fontSize: "17px",
    fontWeight: "600",
    position: "absolute",
    color: "#003e4c",
    top: "99px",
    left: "-115px",
    [emulatorScreen(theme)]: {
      fontSize: "18px",
      left: "-27px",
    },
    [mobileScreen(theme)]: {
      left: "-22px",
      fontSize: "13px",
    },
  },

  graphXLable: {
    height: "18px",
    position: "absolute",
    bottom: "-35px",
    right: "5px",
    [emulatorScreen(theme)]: {
      height: "12px",
      bottom: "-25px",
    },
    [mobileScreen(theme)]: {
      height: "10px",
      bottom: "-22px",
    },
  },

  graphQ1Lable: {
    fontSize: "24px",
    fontWeight: "600",
    position: "absolute",
    color: "#003e4c",
    bottom: "-40px",
    left: "210px",
    [emulatorScreen(theme)]: {
      bottom: "-28px",
      left: "137px",
      fontSize: "18px",
    },
    [mobileScreen(theme)]: {
      bottom: "-22px",
      left: "94px",
      fontSize: "13px",
    },
  },

  graphQ2Lable: {
    fontSize: "24px",
    fontWeight: "600",
    position: "absolute",
    color: "#003e4c",
    bottom: "-40px",
    left: "282px",
    [emulatorScreen(theme)]: {
      bottom: "-28px",
      fontSize: "18px",
    },
    [mobileScreen(theme)]: {
      bottom: "-22px",
      // left: '137px',
      fontSize: "13px",
    },
  },

  dragLineMessage: {
    height: "130px",
    position: "absolute",
    right: "-20px",
    top: "80px",
    [emulatorScreen(theme)]: {
      height: "90px",
      right: "-25px",
      top: "50px",
    },
  },
});
export default styles;
