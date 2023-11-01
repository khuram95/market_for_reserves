import React, { useState, useEffect, useLayoutEffect } from "react";
import Draggable, { DraggableCore } from "react-draggable"; // Both at the same time
import { withStyles } from "@material-ui/core/styles";
import leftArrow from "../../../../../images/leftArrow.svg";
import rightArrow from "../../../../../images/rightArrow.svg";
import LineTo from "react-lineto";
import { Typography } from "@material-ui/core";
// import dGreen from "../../../../../images/equalibriumIcons/d-green.svg";
import dBlue from "../../../../../images/equalibriumIcons/D-blue.svg";
import D1 from "../../../../../images/equalibriumIcons/D1.svg";
import D2 from "../../../../../images/equalibriumIcons/D2.svg";

import styles from "../dottedDemandStyles";
import "animate.css/animate.css";
import Labels from "../Labels";

// let initialDotPosition
// let moveXAxisCount = 0

const DemandDotted = (props) => {
  const { classes } = props;

  const {
    questionAnswer,
    answeredCorrectly,
    setAnsweredCorrectly,
    setMoved,
    submitted,
    disableSupply,
    setDisableSupply,
    disableDemand,
    setDisableDemand,
    modalOpen,
    // setShowDragMessage,
  } = props;

  //adjust dot center accoring to line
  const heightOfLine = 400;
  const dotCenterPosition = (heightOfLine - 30) / 2;

  const { answer } = questionAnswer;
  const [linePosition, setLinePosition] = useState({ x: 0, y: 0 });
  const [correctPosition, setCorrectPosition] = useState(0);
  const [wrongPosition, setWrongPosition] = useState(null);
  const [showLine, setShowLine] = useState(false);
  const [showDot, setShowDot] = useState(false);
  const [changeIconColor, setChangeIconColor] = useState(false);
  const [lineColor, setLineColor] = useState("#003E4C");
  const [arrowIcon, setArrowIcon] = useState();
  const [arrowFadeIn, setArrowFadeIn] = useState();
  const [arrowPosition, setArrowPosition] = useState({ left: 0, top: 0 });
  const [showDottedLines, setShowDottedLines] = useState(false);
  const [reRender, setReRender] = useState(false);
  const [d2Postion, setD2Postion] = useState(0);
  // animate__fadeIn
  useEffect(() => {
    if (submitted) {
      if (answer.includes("Nothing")) {
        if (nothingMove()) {
          setAnsweredCorrectly(true);
          setMoved("correct");
        } else {
          setColors();
          nothingAsWrong();
        }
      } else if (nothingMove()) {
        nothingAsWrong();
      } else {
        evaluateLineAnswer(linePosition.y);
      }
      showArrow();
      answer.includes("Demand curve") && setChangeIconColor(true);
      setTimeout(() => {
        if (answer.includes("Demand curve")) {
          setShowDottedLines(true);
          setShowDot(true);
          disableSupply && setLineColor("red")
        }
      }, 1000);
    }
  }, [submitted]);

  useEffect(() => {
    if (answeredCorrectly === false && disableDemand) {
      setLinePosition({ x: 0, y: 0 });
      switch (answer) {
        case "Demand curve shifts left":
          setShowLine(true);
          setCorrectPosition(-75)
          break;
        case "Demand curve shifts right":
          setShowLine(true);
          setCorrectPosition(25);
          break;
      }
      setAnsweredCorrectly(false);
      return;
    }
  }, [answeredCorrectly]);

  window.addEventListener("resize", () =>
    setTimeout(() => {
      setReRender(!reRender);
      return window.removeEventListener("resize", () => {});
    }, 250)
  );

  const showArrow = () => {
    switch (answer) {
      case "Demand curve shifts left":
        setArrowIcon(leftArrow);
        setArrowPosition({ top: dotCenterPosition + 63, left: 200 });
        break;
      case "Demand curve shifts right":
        setArrowPosition({ top: dotCenterPosition + 118, left: 200 });
        setArrowIcon(rightArrow);
        break;
    }
    setArrowFadeIn(
      "animate__animated animate__fadeIn animate__slow animate__delay-1s"
    );
  };

  const DragStartLine = (event) => {
    console.log("event demand", event);
    if (disableDemand) {
      console.log("demand line was dragged");
      setLinePosition({ x: 0, y: 0 });
      modalOpen();
    }
  };

  const DragLine = (event, ui) => {
    if (disableDemand) {
      console.log("demand line was dragged");
      setLinePosition({ x: 0, y: 0 });
    } else {
      setLinePosition({
        x: linePosition.x + ui.deltaX,
        y: linePosition.y + ui.deltaY,
      });
    }
  };

  const nothingMove = () => !disableDemand && !disableSupply;

  const setColors = () => {
    if (disableSupply) setLineColor("red");
  };

  const nothingAsWrong = () => {
    setDisableDemand(true);
    setDisableSupply(true);

    switch (answer) {
      case "shifts left":
        setShowLine(true);
        setCorrectPosition(-75);
        break;
      case "shifts right":
        setShowLine(true);
        setCorrectPosition(25);
        break;
    }
    setMoved("nothing");
    setAnsweredCorrectly(false);
  };

  const markQuestionAsWrong = () => {
    setDisableDemand(true);
    setDisableSupply(true);

    switch (answer) {
      case "Demand curve shifts left":
        setShowLine(true);
        setCorrectPosition(-75);
        setMoved("moved demand curve but in opposite");
        setColors();
        break;
      case "Demand curve shifts right":
        setShowLine(true);
        setCorrectPosition(25);
        setMoved("moved demand curve but in opposite");
        setColors();
        break;
      default:
        setColors();
        answer.includes("Supply curve shifts") && setMoved("incorrect");
    }
    // setLinePosition({ x: 0, y: 0 });
    setAnsweredCorrectly(false);
  };

  const DragEndLine = (event) => {
    if (linePosition.y <= 10 && linePosition.y >= -10) {
      setDisableSupply(false);
      setLinePosition({ x: 0, y: 0 });
    } else {
      setDisableSupply(true);
    }
  };

  const evaluateLineAnswer = (value) => {
    console.log("evaluator called");

    // if (value <= 10 && value >= -10)
    //   return

    let answerMatched = false;

    if (value > 10) {
      // setLinePosition({x: 75, y: 0})
      answerMatched = answer === "Demand curve shifts right";
    } else if (value < -10) {
      // setLinePosition({x: -75, y: 0})
      answerMatched = answer === "Demand curve shifts left";
    }

    console.log("evaluator called", answerMatched);
    answerMatched ? markQuestionAsCorrect() : markQuestionAsWrong();
  };

  const markQuestionAsCorrect = () => {
    setDisableDemand(true);
    setDisableSupply(true);
    changePosition();
    setAnsweredCorrectly(true);
    setMoved("correct");
    // setLinePosition({ x: 0, y: 0 });
    setD2Postion()
  };

  const isShowD2 = () => {
    return submitted && answer.includes("Demand")
  }

  const getD2Postion = () => {
    if(answer.includes("Demand")){
      if(answer.includes("shifts right")) return  -250
      if(answer.includes("shifts left")) return  -250
    }
  }

  const changePosition = () => {
    switch (answer) {
      case "Demand curve shifts left":
        setLinePosition({ x: 0, y: 50 });
        setCorrectPosition(-75);
        break;
      case "Demand curve shifts right":
        setLinePosition({ x: 0, y: 50 });
        setCorrectPosition(25);
        break;
      default:
      // code block
    }
  };

  const draggableLineColor = () => {
    if (answeredCorrectly && answer.includes("Demand curve shifts")) {
      return "#508a05";
    }
    return wrongPosition ? "#003E4C" : lineColor;
  };

  const lineMovedOrNotAnswered = () => {
    return true;
    if (answeredCorrectly === null) return true;
    if (answeredCorrectly === false) return false;
    if (answer.includes("Supply curve")) return true;
    if (linePosition.x !== 0 && answeredCorrectly) return true;

    return false;
  };

  const showIconDefaultLine = () => {
    if (answer.includes("Nothing")) return dBlue;
    if (answeredCorrectly === false && answer.includes("Supply curve"))
      return dBlue;
    if (answeredCorrectly === false && answer.includes("Demand curve"))
      return D1;
    if (answeredCorrectly === true && answer.includes("Supply curve"))
      return dBlue;
    return D1;
  };

  const p2ToOrigin = () => dotCenterPosition - 34;
  const p1ToCorrect = () =>
    answer.includes("shifts right")
      ? dotCenterPosition - 70
      : dotCenterPosition;
  const q2ToCorrect = () =>
    answer.includes("shifts right") ? "265px" : "195px";
  const q1ToOrigin = () => "230px";
  const qTop = () => "330px";


  const getSlidDirection = () => {
    if(answer.includes("shifts right")){
      return "bottom"
    }
    if(answer.includes("shifts left")){
      return "top"
    }
  }

  const getSlidDisctance = () => {
    if(answer.includes("shifts right")){
      return -95
    }
    if(answer.includes("shifts left")){
      return -11
    }
  }

  const getDefaultDisctance = () => {
    if(answer.includes("shifts right")){
      return -45
    }
    if(answer.includes("shifts left")){
      return 39
    }
  }

  const addInLeft = () => {
    return answer.includes("shifts left") ? 0 : 77
  }

  const correctLine = () => {
    return (<div
      style={{
        transition: `${getSlidDirection()} ${wrongPosition ? "2s" : "1s"}`, // Specify the transition property and duration
        left: -64,
        zIndex: 5,
        position: "absolute",
        // top: correctPosition ? getSlidDisctance() : 39, // Use "px" for left values

        [answer.includes("shifts left") ? "top" : "bottom"]: correctPosition ? getSlidDisctance() : getDefaultDisctance(),
        // bottom: correctPosition ? -95 : -45, // Use "px" for left values
      }}
        >
          {dottedLines(getUpperLeft(), getBottomLeft())}
          <div
            className="straight-line"
            style={{
              width: 93 + addInLeft(),
              height: "7px",
              backgroundColor: "#508a05",
              position: "relative",
              bottom: "-85px",
              left: -145,
              borderRadius: "5px",
            }}
          ></div>
          <div
            className="bent-line"
            style={{
              width: "205px",
              height: "7px",
              backgroundColor: "#508a05",
              transform: "rotate(52deg)",
              position: "absolute",
              top: "165px",
              left: -95 + addInLeft(),
            }}
          ></div>
          <div
            className="second-straight-line"
            style={{
              width: 262 - addInLeft(),
              height: "7px",
              backgroundColor: "#508a05",
              position: "absolute",
              top: "245px",
              left: 67 + addInLeft(),
              borderRadius: "5px",

            }}
          ></div>
          <img
            src={D2}
            className={classes.correctLineIcon}
            style={{ right: getD2Postion() + addInLeft(), bottom: -235}}
          />
        </div>)
  }

  const getUpperLeft= () =>{
    return (answer.includes("shifts right") ? -195 : -195)
  }

  const getBottomLeft= () =>{
    return (answer.includes("shifts right") ? -240 : -240)
  }

  const FixedLine = () => {
    return (<div
          // className={classes.correctLine}
          // style={{
          //   zIndex: showLine ? "1" : "-1",
          //   backgroundColor: wrongPosition ? lineColor : "#508a05",
          //   transition: `left ${wrongPosition ? "0s" : "1s"}`,
          //   left: wrongPosition ? wrongPosition : correctPosition,
          // }}
          style={{ top: 39, zIndex: -1, position: "absolute", left: -25  }}
        >
          { submitted &&
          <div
            className="straight-line"
            style={{
              width: "132px",
              height: "7px",
              backgroundColor: "#003E4C",
              position: "relative",
              bottom: "-85px",
              left: "-183px",
              borderRadius: "5px",
            }}
          ></div>}

          <div
            className="bent-line"
            style={{
              width: "205px",
              height: "7px",
              backgroundColor: "#003E4C",
              transform: "rotate(52deg)",
              position: "absolute",
              top: "165px",
              left: "-95px",
            }}
          ></div>
          {submitted && <div
            className="second-straight-line"
            style={{
              width: "224px",
              height: "7px",
              backgroundColor: "#003E4C",
              position: "absolute",
              top: "245px",
              left: "67px",
              borderRadius: "5px",
            }}
          ></div>}
        </div>)
  }

  const dottedLines = (upperLeft = -233, bottomLeft = -280, upperTop= 85, bottomTop = 245) => {
    return(
      <>
        <div style={{ position: "absolute", top: upperTop, left: upperLeft }}>
          <Typography style={{left: -60, top: -10, position: "absolute", width: 95, textAlign: "right" }} className={classes.dottedLines}>Discount Rate</Typography>
          <div
            className={"dotOriginP"}
            style={{
              position: "absolute",
              top: 0,
              left: 60 + dottedLine1Width(),
            }}
          />
          <div className={"P2"} style={{ position: "absolute", top: 0, right: -520  }} />
          <LineTo
            from="dotOriginP"
            to="P2"
            orientation="h"
            borderStyle="dashed"
            borderWidth="5px"
            borderColor="#003e4c"
            fromAnchor="20%"
            delay={true}
            zIndex={0}
            className="animate__animated animate__fadeIn"
          />
        </div>

        <div style={{ position: "absolute", top: bottomTop, left: bottomLeft }}>
          <Typography style={{ top: -10, position: "absolute", width: 95, left: -13, textAlign: "right" }} className={classes.dottedLines}>Interest on Reserves</Typography>
          <div
            className={"dotOriginP1"}
            style={{
              position: "absolute",
              top: 0,
              left: 100,
            }}
          />
          <div className={"P3"} style={{ position: "absolute", top: 0, right: -390 + dottedLine2Width()   }} />
          <LineTo
            from="dotOriginP1"
            to="P3"
            orientation="h"
            borderStyle="dashed"
            borderWidth="5px"
            borderColor="#003e4c"
            fromAnchor="20%"
            delay={true}
            zIndex={0}
            className="animate__animated animate__fadeIn"
          />
        </div>
      </>
    )
  }

  const dottedLine1Width = () => {
    if(submitted && answer.includes("Demand")){
      return answer.includes("shifts left") ? 85 : 165
    }else{
      return 0
    }
  }

  const dottedLine2Width = () => {
    if(submitted && answer.includes("Demand")){
      return answer.includes("shifts left") ? 85 : 10
    }else{
      return 0
    }
  }

  const dragableLine = () => {
    return(
      <div  id="draggable_line">
        <div
          className="line-container"
          style={{ position: "relative", top: "39px", height: 0, width: 0,  left: submitted ? -25 : -25 }}
          >
          {/* {!submitted ? dottedLines() : answer.includes("Supply") && defaultDottedLines()} */}
          {(!submitted || answer.includes("Supply")) && dottedLines()}
          { !submitted &&
          <>
          <div
            className="straight-line"
            style={{
              width: "132px",
              height: "7px",
              backgroundColor: lineColor,
              position: "relative",
              bottom: "-85px",
              left: "-183px",
              borderRadius: "5px",
            }}
          ></div>
          <div
            className="second-straight-line"
            style={{
              width: "224px",
              height: "7px",
              backgroundColor: lineColor,
              position: "absolute",
              top: "245px",
              left: "67px",
              borderRadius: "5px",
            }}
          ></div>
          </>
          }
        </div>
        {!submitted && lineMovedOrNotAnswered() && (
          <img
            src={isShowD2() ? D2 : dBlue}
            className={isShowD2() ? classes.correctLineIcon : classes.lineIcon}
            // style={{ right: isShowD2() &&  getD2Postion()}}
          />
        )}
      </div>
    )
  }

  return (
    <div>
      {/* <div style={{ height: 15, position: "absolute", zIndex: 15, top: 96, left: -74, width: "15%", backgroundColor: "#ecf2f1" }}></div> */}

      <div
        className={classes.verticalLinesContainer}
        style={{
          zIndex:
            answeredCorrectly !== null && answer.includes("Demand") ? "0" : "1",
        }}
      >
        <div className={arrowFadeIn}>
          <img
            src={arrowIcon}
            className={classes.arrows}
            style={{ top: arrowPosition.top, left: arrowPosition.left, transform: "rotate(90deg)", }}
          ></img>
        </div>
        <div>
          {!(answeredCorrectly === null) && (
            <img src={showIconDefaultLine()} className={classes.lineIcon} />
          )}
        </div>
        { submitted && answer.includes("Demand") &&
          correctLine()
        }
        <Draggable
          axis="x"
          defaultPosition={{ x: -30, y: 0 }}
          position={linePosition}
          scale={1}
          bounds={{ top: -50, bottom: 50, left: 0, right: 0 }}
          onStart={DragStartLine}
          onDrag={DragLine}
          onStop={DragEndLine}
          // disabled={DisasetDisableDemand}
        >
          <div style={{ cursor: !disableDemand && "pointer" }}>
          {dragableLine()}
          </div>
        </Draggable>

        {FixedLine()}

      </div>
    </div>
  );
};

export default withStyles(styles)(DemandDotted);
