import React, { useState } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button, Link } from "@material-ui/core";
import Correct from "../../images/checkMarkImage.png";
import Wrong from "../../images/xMarkImage.png";
import mruLogo from "../../images/mruLogo.png";
import { filter } from "lodash";
import html2canvas from "html2canvas";
import Hand from "../../images/resultIcons/Hand.svg";
import Desk from "../../images/resultIcons/Desk.svg";
import Blocks from "../../images/resultIcons/Blocks.svg";
import Podium from "../../images/resultIcons/Podium.svg";
import NextPractice from "../../images/resultIcons/NextPractice.svg";
import Retry from "../../images/resultIcons/Retry.svg";
import download from "downloadjs";
import downloadIcon from "../../images/download.svg";
import TeacherGuide from "../../images/resultIcons/TeacherGuide.svg";

const ResultScreen = ({ classes, answers, setAnswers, setCurrentScreen }) => {
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
          {/* <Grid className={classes.forStudents}>
            <Typography className={classes.forStudentsTitle}>
              FOR STUDENTS
            </Typography>
            <Link onClick={quizRetry} className={classes.sideBarLink}>
              <img src={Retry} className={classes.linkImg} />
              <Typography className={classes.sideBarLinkText}>RETRY</Typography>
            </Link>
            <Link
              href="https://practice.mru.org"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={Hand} className={classes.linkImg} />
              <Grid>
                <Typography className={classes.sideBarLinkText}>
                  MORE INTERACTIVE
                </Typography>
                <Typography className={classes.sideBarLinkText}>
                  PRACTICE
                </Typography>
              </Grid>
            </Link>
          </Grid> */}
          <Grid className={classes.forTeachers}>
            <Typography className={classes.forStudentsTitle}>
              FOR TEACHERS
            </Typography>
            <Link
              href="https://mru.org/get-shifts-supply-or-demand-interactive-practice-teachers-guide/receive"
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
              href="https://mru.org/supplydemand"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={Blocks} className={classes.linkImg} />
              <Grid>
                <Typography className={classes.sideBarLinkText}>
                  UNIT PLAN
                </Typography>
                <Typography className={classes.sideBarLinkText}>
                  Supply and Demand
                </Typography>
              </Grid>
            </Link>
            <Link
              href="https://mru.org/resources/high-school/interactive-practice"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={Hand} className={classes.linkImg} />
              <Grid>
                <Typography className={classes.sideBarLinkText}>
                  ALL INTERACTIVES
                </Typography>
              </Grid>
            </Link>
            <Link
              href="https://mru.org/high-school-teaching-resources"
              target="_blank"
              className={classes.sideBarLink}
            >
              <img src={Desk} className={classes.linkImg} />
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
              <img src={Podium} className={classes.linkImg} />
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

      <Grid className={classes.rightBarContainer}>
        <Link onClick={quizRetry} className={classes.rightSideBarLink}>
          <img src={Retry} className={classes.linkImg} />
          <Typography className={classes.rightSideBarLinkText}>RETRY</Typography>
        </Link>
        <Link
          href="https://practice.mru.org/equilibrium2/"
          target="_blank"
          className={classes.rightSideBarLink}
        >
          <img src={NextPractice} className={classes.linkImg} />
          <Typography className={classes.rightSideBarLinkText}>NEXT PRACTICE SET</Typography>
        </Link>
        <Link
          href="https://practice.mru.org"
          target="_blank"
          className={classes.rightSideBarLink}
        >
          <img src={Hand} className={classes.linkImg} />
          <Typography className={classes.rightSideBarLinkText}> ALL INTERACTIVES </Typography>
        </Link>
      </Grid>


      <Grid
        container
        alignItems="center"
        direction="column"
        className={classes.quizResultContainer}
      >
        <Grid>
          <Typography variant="h5" className={classes.homeDesc}>
            Finding Equilibrium (Set 1/3)
          </Typography>
        </Grid>
        <Grid container justify="center" alignItems="center">
          <Typography className={classes.score}>SCORE</Typography>
          <Typography className={classes.totalScore}>
            {filter(answers, (o) => o === true).length}/{answers.length}
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
                  <img src={downloadIcon} className={classes.downloadImage} />
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
            <img src={mruLogo} className={classes.logoImg} />
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(ResultScreen);
