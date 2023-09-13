import React from "react";
import styles from "./styles";
import { Grid, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import "animate.css/animate.css";

const AnswerOptions = ({ questionAnswer, selected, setSelected, classes }) => {
  function setBackground(e) {
    e.target.style.background = "#003E4C";
    e.target.style.color = "#fff";
  }

  function removeBackground(e) {
    e.target.style.background = "white";
    e.target.style.color = "#003E4C";
  }
  return (
    <Grid className={classes.optionContainer} >
      <Typography className={classes.title}>
        {questionAnswer.choseText}
      </Typography>
      <Grid className={classes.optionGrid}>
        {questionAnswer.options.map((value, index) => (
          <Typography
            className={classes.options}
            style={{
              backgroundColor: selected === index ? "#00b1d9" : "white",
              color: selected === index ? "white" : "#003E4C",
              borderColor: selected === index ? "#00b1d9" : "#003E4C",
            }}
            onMouseOver={(e) => selected !== index && setBackground(e)}
            onMouseLeave={(e) => selected !== index && removeBackground(e)}
            onClick={() => setSelected(index)}
          >
            {value}
          </Typography>
        ))}
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(AnswerOptions);
