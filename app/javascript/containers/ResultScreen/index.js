import React, { useState } from 'react'
import styles from './styles'
import { withStyles } from "@material-ui/core/styles"
import { Grid, Typography, Button } from '@material-ui/core'
import Correct from 'images/checkMark.svg'
import Wrong from 'images/xMark.svg'
import { filter } from "lodash"
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


const ResultScreen = ({ classes, answers }) => {
  // const answers = [true, true, true, true, true, true, true, true, true, false]
  const [name, setName] = useState("")
  const [showStudentName, setShowStudentName] = useState(false)

  const handleClick = () => {
    setShowStudentName(true)
    setTimeout(() => {
      // htmlToImage.toPng(document.body)
      // .then(function (dataUrl) {
      //   var img = new Image();
      //   img.src = dataUrl;
      //   document.body.appendChild(img);
      //   download(dataUrl, 'my-node.png');
      // })
      // .catch(function (error) {
      //   console.error('oops, something went wrong!', error);
      // });

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
      <Grid container alignItems='center' direction='column' style={{ maxHeight: "350px", maxWidth: "600px", padding: "50px 0px"}}>
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
            <Grid container alignItems="center" justify='center' style={{ marginTop: "3rem" }}>
              <input
                className={classes.nameInput}
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="Your name here"
              />
              <Button
                className={classes.saveButton}
                onClick={handleClick}
              >
                SAVE AS .JPG
                </Button>
            </Grid>
          </Grid>}
    </Grid>
  )
}

export default withStyles(styles)(ResultScreen)
