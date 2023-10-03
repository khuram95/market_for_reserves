import React from "react";
import styles from "./styles";
import { Typography } from "@material-ui/core";
import LineTo from "react-lineto";
import withStyles from "@material-ui/core/styles/withStyles";

const Labels = (props) => {
  const {
    answer,
    isMobile,
    isEmulator,
    p2Top,
    p1Top,
    originP,
    originCorrectP,
    q1,
    q2,
    originQ,
    dotCorrectQ,
    classes,
  } = props;

  const setP2Label = () => {
    let answerCondition = answer.includes("shifts left");

    if (answer.includes("Demand")) answerCondition = !answerCondition;

    if (answerCondition)
      if (isMobile) return "44px";
      else if (isEmulator) return "58px";
      else return "105px";
    else if (isMobile) return "78px";
    else if (isEmulator) return "102px";
    else return "250px";
  };

  const setQ2Label = () => {
    if (answer.includes("shifts left"))
      if (isMobile) return "76px";
      else if (isEmulator) return "112px";
      else return "173px";
    else if (isMobile) return "115px";
    else if (isEmulator) return "165px";
    else return "250px";
  };

  const calcBorderWidth = () => {
    if (isMobile) return "3px";
    else return "4px";
  };

  const calculateTopCorrectP = () => {
    if(answer.includes("Demand")){
      if (answer.includes("shifts left")){
        return 260
      }else{
        return 125
      }
    }else{
      if (answer.includes("shifts left")){
        return 120
      }else{
        return 260
      }
    }
  }

  const calculateLeftCorrectP = () => {
    console.log("answer", answer)
    if(answer.includes("Demand")){
      if (answer.includes("shifts left")){
        return 180
      }else{
        return 185
      }
    }else{
      if (answer.includes("shifts left")){
        return 132
      }else{
        return 240
      }
    }
  }

  return (
    <span className="animate__animated animate__fadeIn">
      <Typography className={classes.graphP1Lable}>Policy Rate 1</Typography>
      <Typography
        className={classes.graphP2Lable}
        style={{ top: setP2Label() }}
      >
        Policy Rate 2
      </Typography>
      <>
        <div className={"P2"} style={{ position: "absolute", top: calculateTopCorrectP() }} />
        <div
          className={"P1"}
          style={{
            position: "absolute",
            top: 190,
          }}
        />

        <div
          className={"dotOriginP"}
          style={{
            position: "absolute",
            top: calculateTopCorrectP(),
            left: calculateLeftCorrectP(),
          }}
        />
        <div
          className={"dotCorrectP"}
          style={{
            position: "absolute",
            top: 190,
            left: 190,//
          }}
        />

        <LineTo
          from="dotOriginP"
          to="P2"
          orientation="h"
          borderStyle="dashed"
          borderWidth={calcBorderWidth()}
          borderColor="#003e4c"
          fromAnchor="20%"
          delay={true}
          className="animate__animated animate__fadeIn"
        />
        <LineTo
          from="dotCorrectP"
          to="P1"
          orientation="h"
          borderStyle="dashed"
          borderWidth={calcBorderWidth()}
          borderColor="#003e4c"
          fromAnchor="20%"
          delay={true}
          className="animate__animated animate__fadeIn"
        />

        <div
          className={"Q1"}
          style={{ position: "absolute", top: 337.668, left: 586.5 }}
        />
        <div
          className={"Q2"}
          style={{ position: "absolute", top: q2.top, left: q2.left }}
        />

        {/* <div
          className={"dotOriginQ"}
          style={{ position: "absolute", top: originQ.top, left: originQ.left }}
        />
        <div
          className={"dotCorrectQ"}
          style={{
            position: "absolute",
            top: dotCorrectQ.top,
            left: dotCorrectQ.left,
          }}
        /> */}

        <LineTo
          from="dotOriginQ"
          to="Q1"
          orientation="h"
          borderStyle="dashed"
          borderWidth={calcBorderWidth()}
          borderColor="#003e4c"
          fromAnchor="20%"
          delay={true}
          className="animate__animated animate__fadeIn"
        />
        <LineTo
          from="dotCorrectQ"
          to="Q2"
          orientation="h"
          borderStyle="dashed"
          borderWidth={calcBorderWidth()}
          borderColor="#003e4c"
          fromAnchor="20%"
          delay={true}
          className="animate__animated animate__fadeIn"
        />
      </>
    </span>
  );
};

export default withStyles(styles)(Labels);
