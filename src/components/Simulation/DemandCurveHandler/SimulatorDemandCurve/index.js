import React, { useState, useEffect } from "react";
import Draggable from "react-draggable"; // Both at the same time
import dGreen from "../../../../../src/images/equalibriumIcons/d-green.svg";
import sBlue from "../../../../../src/images/equalibriumIcons/S-blue.svg";
import { withStyles } from "@material-ui/core/styles";
import HandCursor from "../../../../../src/images/handCursor.svg";
import xMark from "../../../../../src/images/xMark.svg";
import "animate.css/animate.css";
import styles from "./styles";

const SimulatorDemandCurve = (props) => {
  const {
    classes,
    move,
    dotCenterPosition,
    dotShiftVariant,
    lineDefaultPosition,
    lineShiftVariant,
  } = props;

  //adjust dot center accoring to line
  const [dotPosition, setDotPosition] = useState(dotCenterPosition);
  const [linePosition, setLinePosition] = useState(
    `${lineDefaultPosition + lineShiftVariant}px`
  );

  useEffect(() => {
    switch (move) {
      case "none":
        break;
      case "line":
        animateLine();
        break;
      case "dot":
        animateDot();
        break;
      default:
        break;
    }
  }, [move]);

  const animateLine = () => {
    setTimeout(() => {
      setLinePosition(`${lineDefaultPosition - lineShiftVariant}px`);
    }, 1000);
    setTimeout(() => {
      setLinePosition(`${lineDefaultPosition + lineShiftVariant}px`);
      animateLine();
    }, 2000);
  };

  const animateDot = () => {
    setTimeout(() => {
      setDotPosition(dotCenterPosition + dotShiftVariant);
    }, 1000);
    setTimeout(() => {
      setDotPosition(dotCenterPosition - dotShiftVariant);
      animateDot();
    }, 2000);
  };

  return (
    <div
      className={classes.verticalLinesContainer}
      style={{ left: linePosition }}
    >
      <div>
        <img src={dGreen} className={classes.lineIcon} />
        <div style={{ height: "40px" }}>
          <div
            className="straight-line"
            style={{
              width: "132px",
              height: "7px",
              backgroundColor: "white",
              position: "relative",
              bottom: "-85px",
              left: "-183px",
              borderRadius: "5px",
            }}
          ></div>
          <div
            className="bent-line"
            style={{
              width: "205px",
              height: "7px",
              backgroundColor: "white",
              transform: "rotate(52deg)",
              position: "absolute",
              top: "165px",
              left: "-95px",
            }}
          ></div>
          <div
            className="second-straight-line"
            style={{
              width: "127px",
              height: "7px",
              backgroundColor: "white",
              position: "absolute",
              top: "245px",
              left: "67px",
              borderRadius: "5px",
            }}
          ></div>

          <img
            src={HandCursor}
            className={classes.handCursorDesign}
            style={{
              opacity: "1",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(SimulatorDemandCurve);
