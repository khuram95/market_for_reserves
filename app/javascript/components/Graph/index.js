import React, { useState } from 'react'
import LineDotLeft from '../LineDotLeft'
import LineDotRight from '../LineDotRight'
import { Grid, Typography } from '@material-ui/core'


const questionAnswers = [
  {
    question: "Consumers expect the price of laptop computers to decrease in the coming months.",
    answer: "Shift left",
    briefness: "The expectation of lower prices in the future will cause a decrease in the demand for laptops today. At every price, consumers will buy fewer computers today."
  },
  {
    question: "A reduction in the supply of soda causes the price of soda to increase.",
    answer: "Dot moves up",
    briefness: "A change in price causes movement along the curve. It does not change demand, only quantity demanded. A decrease in price would cause an increase in the quantity demanded."
  },
  {
    question: "The price of almond butter, a substitute for peanut butter, decreases.",
    answer: "Shift left",
    briefness: "When the price of almond butter decreases, consumers will purchase MORE almond butter (movement along the almond butter demand curve) and LESS peanut butter at every price (leftward shift of peanut butter demand curve)."
  }
]

const Graph = () => {

  const [questionIndex, setQuestionIndex] = useState(0)
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null)
  return (
    <Grid container justify='center'>

      <Grid style={{ borderLeft: '10px solid red', borderBottom: '10px solid red', height: '400px', width: '400px', position: "relative" }}>
        <LineDotLeft
          questionAnswer={questionAnswers[questionIndex]}
          setAnsweredCorrectly={setAnsweredCorrectly}
          answeredCorrectly={answeredCorrectly}
        />
        {/* <LineDotRight
          questionAnswer={questionAnswers[questionIndex]}
          setAnsweredCorrectly={setAnsweredCorrectly}
          answeredCorrectly={answeredCorrectly}
        /> */}
      </Grid>
      <Grid>
        <Grid>
          Score: 0
        </Grid>
        <Typography>
          {questionAnswers[questionIndex].question}
        </Typography>
        <Grid>
          {answeredCorrectly != null && answeredCorrectly ? "Correct" : "Wrong"}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Graph
