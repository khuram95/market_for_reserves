import React, { useState } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Link } from "@material-ui/core";
import Correct from "../../images/resultIcons/checkMarkImage.png";
import Wrong from "../../images/resultIcons/xMarkImage.png";
import mruLogo from "../../images/mruLogo.png";
import { filter } from "lodash";
import html2canvas from "html2canvas";
import Hand from "../../images/resultIcons/Hand.svg";
import Desk from "../../images/resultIcons/Desk.svg";
import TeacherGuide from "../../images/resultIcons/TeacherGuide.svg";
import Blocks from "../../images/resultIcons/Blocks.svg";
import Podium from "../../images/resultIcons/Podium.svg";
import Retry from "../../images/resultIcons/Retry.svg";
import download from "downloadjs";
import downloadIcon from "../../images/resultIcons/download.svg";

const ResultScreen = ({
  classes,
  answers,
  setAnswers,
  totalBalance,
  setCurrentScreen,
  setPhase2Answers,
  setTotalBalance,
}) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [showStudentName, setShowStudentName] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const handleClick = () => {
    if (name.length <= 30) {
      takeScreenshot();
    } else {
      setError("Name cannot be more than 30 charactors");
    }
  };

  const onInputChange = (e) => {
    setError(false);

    if (e.target.value === "") setDisableButton(true);
    else setDisableButton(false);
    setName(e.target.value);
  };

  const takeScreenshot = () => {
    setShowStudentName(true);
    setTimeout(() => {
      html2canvas(document.body, {
        width: "1000",
        height: "570",
        windowWidth: "1000",
        windowHeight: "570",
      }).then((canvas) => {
        download(canvas.toDataURL("image/png"), "my-class-assignment.jpg");
      });
    });
  };

  const quizRetry = () => {
    setAnswers([]);
    setPhase2Answers([]);
    setTotalBalance(0);
    setCurrentScreen("Quiz");
  };
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      className={classes.resultScreenContainer}
    >
      {!showStudentName && (
        <Grid className={classes.leftBarContainer}>
          <Grid className={classes.forStudents}>
            <Typography className={classes.forStudentsTitle}>
              FOR STUDENTS
            </Typography>
            <Link onClick={quizRetry} className={classes.sideBarLink}>
              <img src={Retry} className={classes.linkImg} alt="" />
              <Typography className={classes.sideBarLinkText}>RETRY</Typography>
            </Link>
            <Link
              href="https://practice.mru.org"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={Hand} className={classes.linkImg} alt="" />
              <Grid>
                <Typography className={classes.sideBarLinkText}>
                  MORE INTERACTIVE
                </Typography>
                <Typography className={classes.sideBarLinkText}>
                  PRACTICE
                </Typography>
              </Grid>
            </Link>
          </Grid>
          <Grid className={classes.forTeachers}>
            <Typography className={classes.forStudentsTitle}>
              FOR TEACHERS
            </Typography>
            <Link
              href=" https://mru.org/get-winners-and-losers-of-inflation-interactive-practice-teachers-guide/receive"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={TeacherGuide} className={classes.linkImg} />
              <Grid>
                <Typography className={classes.sideBarLinkText}>
                  GET TEACHER'S GUIDE
                </Typography>
              </Grid>
            </Link>
            <Link
              href="https://mru.org/inflation"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={Blocks} className={classes.linkImg} alt="" />
              <Grid>
                <Typography className={classes.sideBarLinkText}>
                  GET UNIT PLAN
                </Typography>
                <Typography className={classes.sideBarLinkText}>
                  Money & Inflation
                </Typography>
              </Grid>
            </Link>
            <Link
              href="https://mru.org/resources/high-school/interactive-practice"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={Hand} className={classes.linkImg} alt="" />
              <Grid>
                <Typography className={classes.sideBarLinkText}>
                  MORE INTERACTIVE
                </Typography>
                <Typography className={classes.sideBarLinkText}>
                  PRACTICE
                </Typography>
              </Grid>
            </Link>
            <Link
              href="https://mru.org/high-school-teaching-resources"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={Desk} className={classes.linkImg} alt="" />
              <Grid>
                <Typography className={classes.sideBarLinkText}>
                  ALL HIGH SCHOOL
                </Typography>
                <Typography className={classes.sideBarLinkText}>
                  RESOURCES
                </Typography>
              </Grid>
            </Link>
            <Link
              href="https://mru.org/university-teaching-resources"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={Podium} className={classes.linkImg} alt="" />
              <Grid>
                <Typography className={classes.sideBarLinkText}>
                  ALL UNIVERSITY
                </Typography>
                <Typography className={classes.sideBarLinkText}>
                  RESOURCES
                </Typography>
              </Grid>
            </Link>
          </Grid>
        </Grid>
      )}
      <Grid
        container
        alignItems="center"
        direction="column"
        className={classes.quizResultContainer}
      >
        <Grid>
          <Typography variant="h5" className={classes.homeDesc}>
            Winners and Losers of Inflation
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography className={classes.score}>BALANCE:</Typography>
          <Typography className={classes.totalScore}>
            ${totalBalance}
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          direction="column"
          className={classes.questionAnswerContainer}
        >
          {answers.map((answer, index) => (
            <Grid style={{ display: "flex" }} alignItems="center">
              <Typography className={classes.answerNumber}>
                {index + 1}.
              </Typography>
              <img
                src={answer ? Correct : Wrong}
                className={classes.answerLogo}
              />
            </Grid>
          ))}
        </Grid>

        {showStudentName ? (
          <Grid>
            <Typography variant="h5" className={classes.classAssignmentTitle}>
              Student name:
            </Typography>
            <Typography variant="h5" className={classes.studentName}>
              {name}
            </Typography>
          </Grid>
        ) : (
          <Grid>
            <Typography variant="h5" className={classes.classAssignmentTitle}>
              Submitting as class assignment?
            </Typography>
            <Grid
              container
              alignItems="center"
              justify="center"
              className={classes.nameContainer}
            >
              <input
                className={classes.nameInput}
                onKeyUp={onInputChange}
                placeholder="Your name here"
              />
              <Button
                className={
                  disableButton ? classes.disabledButton : classes.saveButton
                }
                disabled={disableButton}
                onClick={handleClick}
              >
                <>
                  <img
                    src={downloadIcon}
                    className={classes.downloadImage}
                    alt=""
                  />
                  DOWNLOAD .JPG
                </>
              </Button>
            </Grid>
          </Grid>
        )}
        {error && (
          <Grid container justify="center">
            <Typography variant="h5" className={classes.errorText}>
              {error}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Grid container className={classes.mruLogoContainer}>
        <Grid container justify="flex-end">
          <Link
            href="https://mru.org"
            target="_blank"
            className={classes.mruLogo}
          >
            <img src={mruLogo} className={classes.logoImg} alt="" />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ResultScreen);
