import React, { useState } from 'react'
import styles from './styles'
import { withStyles } from "@material-ui/core/styles"
import { Grid, Typography, Button } from '@material-ui/core'
import Correct from 'images/checkMarkImage.png'
import Wrong from 'images/xMarkImage.png'
import { filter } from "lodash"
import html2canvas from 'html2canvas';
import download from "downloadjs"
import downloadIcon from "images/download.svg"

const ResultScreen = ({ classes, answers }) => {
  // answers = [true, true, true, true, false ,false, true, true ,true, false]
  const [name, setName] = useState("")
  const [error, setError] = useState(null)
  const [showStudentName, setShowStudentName] = useState(false)

  const handleClick = () => {
    if (name.length <= 30) {
      takeScreenshot()
    } else {
      setError("Name cannot be more than 30 charactors")
    }
  }

  const onInputChange = (e, value) => {
    setError(false)
    setName(e.target.value)
  }

  const takeScreenshot = () => {
    setShowStudentName(true)
    setTimeout(() => {
      html2canvas(
        document.body,
        {
          width: "1000",
          height: "570",
          windowWidth: "1000",
          windowHeight: "570"

        }
      ).then((canvas) => {
        download(canvas.toDataURL("image/png"), 'my-class-assignment.jpg');
      });
    })
  }

  return (
    <Grid
      container
      alignItems='center'
      direction='column'
      className={classes.resultScreenContainer}
    >
      <Grid container justify='center' alignItems='center'>
        <Typography className={classes.score}>
          SCORE
        </Typography>
        <Typography className={classes.totalScore}>
          {filter(answers, (o) => o === true).length}/{answers.length}
        </Typography>
      </Grid>
      <Grid container alignItems='center' direction='column' className={classes.questionAnswerContainer}>
        {answers.map((answer, index) =>
          <Grid style={{ display: "flex"}} alignItems="center">
            <Typography className={classes.answerNumber}>
              {index + 1}.
            </Typography>
            <img src={answer ? Correct : Wrong} className={classes.answerLogo}/>
          </Grid>
        )}
      </Grid>

      {showStudentName
        ? <Grid>
            <Typography variant='h5' className={classes.classAssignmentTitle}>
              Student name:
              </Typography>
            <Typography variant='h5' className={classes.studentName}>
              {name}
            </Typography>
          </Grid>
        : <Grid>
            <Typography variant='h5' className={classes.classAssignmentTitle}>
              Submitting as class assignment?
            </Typography>
            <Grid container alignItems="center" justify='center' className={classes.nameContainer}>
              <input
                className={classes.nameInput}
                onChange={onInputChange}
                value={name}
                placeholder="Your name here"
              />
              <Button
                className={classes.saveButton}
                onClick={handleClick}
              >
                <>
                <img src={downloadIcon} className={classes.downloadImage} />
                  DOWNLOAD .JPG
                </>
                </Button>
            </Grid>
        </Grid>}
      {error
        &&
        <Grid container justify='center' >
          <Typography variant='h5' className={classes.errorText}>
            {error}
          </Typography>
        </Grid>}
    </Grid>
  )
}

export default withStyles(styles)(ResultScreen)
