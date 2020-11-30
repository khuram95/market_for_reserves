import React, { useState } from 'react'
import LineDotLeft from '../LineDotLeft'
import LineDotRight from '../LineDotRight'
import { Grid, Typography, Button } from '@material-ui/core'
import price from '../../images/price.svg'
import quantity from '../../images/quantity.svg'
import CorrectIcon from '../../images/correct.svg'
import WrongIcon from '../../images/notQuite.svg'
import breakingNews from '../../images/breakingnews.svg'


const questionAnswers = [
  {
    title: 'DEMAND CURVE FOR LAPTOPS',
    question: "Consumers expect the price of laptop computers to decrease in the coming months.",
    answer: "Shift left",
    briefness: "The expectation of lower prices in the future will cause a decrease in the demand for laptops today. At every price, consumers will buy fewer computers today.",
    score: 10
  },
  {
    title: 'DEMAND CURVE FOR SODA',
    question: "A reduction in the supply of soda causes the price of soda to increase.",
    answer: "Dot moves down",
    briefness: "A change in price causes movement along the curve. It does not change demand, only quantity demanded. A decrease in price would cause an increase in the quantity demanded.",
    score: 10
  },
  {
    title: 'DEMAND CURVE FOR PEANUT BUTTER',
    question: "The price of almond butter, a substitute for peanut butter, decreases.",
    answer: "Shift right",
    briefness: "When the price of almond butter decreases, consumers will purchase MORE almond butter (movement along the almond butter demand curve) and LESS peanut butter at every price (leftward shift of peanut butter demand curve).",
    score: 10
  }
]

const Graph = () => {

  const [questionIndex, setQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [answeredCorrectly, setAnsweredCorrectly] = useState(null)
  const [moved, setMoved] = useState(null)

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1)
    setAnsweredCorrectly(null)
  }

  const whatWasMoved = () => {
    switch (moved) {
      case "dot but moved line":
        return moved
      case "line but moved dot":
        return moved
      case "dot moved opposite":
        return "you where right to move the dot, but you did it in the opposite direction."
      case "line moved opposite":
        return "you where right to shift the curve, but you did it in the opposite direction."
    }
  }

  return (
    <Grid container alignItems="center" direction="column">
      <Typography variant="h2" style={{ color: '#003E4C', fontWeight: '500', paddingTop: "30px", fontFamily: "'Oswald', sans-serif" }}>{questionAnswers[questionIndex].title}</Typography>
      <Grid container item justify='center' alignItems='center' style={{ paddingTop: "60px"}}>
      {answeredCorrectly === null
        ? <Grid style={{ width: '320px', border: '5px solid #003E4C', padding: '30px', marginBottom: '50px', backgroundColor: '#fff'}}>
            <Grid style={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
              <img src={breakingNews} style={{ marginTop: '-56px', height: '50px' }}></img>
              <Typography variant='h5' style={{ color: '#565656', fontWeight: "400", paddingTop: "12px", fontFamily: "'Oswald', sans-serif" }}>
                {questionAnswers[questionIndex].question}
              </Typography>
            </Grid>
          </Grid>
        : answeredCorrectly === true
          ? <Grid style={{ width: '390px', marginBottom: '50px' }}>
              <img src={CorrectIcon} width="200px" />
              <Typography variant='h5' style={{ color: '#003E4C', fontWeight: "600", margin: "5px 0 10px 0" }}>
                Demand {questionAnswers[questionIndex].answer}
              </Typography>
              <Typography variant='h5' style={{ color: '#003E4C', fontWeight: "600", fontSize: "1.2rem", marginRight: "50px" }}>
                {questionAnswers[questionIndex].briefness}
              </Typography>
            </Grid>
          : <Grid style={{ width: '390px', marginBottom: '50px' }}>
              <img src={WrongIcon} width="200px" />
              <Typography variant='h5' style={{ color: '#003E4C', fontWeight: "600", margin: "5px 0 10px 0" }}>
                Demand {questionAnswers[questionIndex].answer}
              </Typography>
              <Typography variant='h5' style={{ color: '#003E4C', fontWeight: "600", fontSize: "1.2rem", marginRight: "50px" }}>
                {`${whatWasMoved()} ${questionAnswers[questionIndex].briefness}`}
              </Typography>
            </Grid>}
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: '185px', justifyContent: 'space-around' }}>
          <Grid container justify='center' style={{maxWidth: '400px'}}>
            <Grid style={{ borderLeft: '5px solid #003E4C', borderBottom: '5px solid #565656', height: '400px', width: '400px', position: "relative" }}>
              <img src={price} style={{ height: '30px', position: 'absolute', top: '180px', left: '-135px' }}></img>

              <LineDotLeft
                questionAnswer={questionAnswers[questionIndex]}
                setAnsweredCorrectly={setAnsweredCorrectly}
                answeredCorrectly={answeredCorrectly}
                setScore={setScore}
                setMoved={setMoved}
                key={questionIndex}
              />
              {/* <LineDotRight
                questionAnswer={questionAnswers[questionIndex]}
                setAnsweredCorrectly={setAnsweredCorrectly}
                answeredCorrectly={answeredCorrectly}
              /> */}
            </Grid>
            <img src={quantity} style={{ height: '30px', marginTop: '10px' }}></img>
          </Grid>
        </div>
      </Grid>
      <Button onClick={nextQuestion} style={{ color: '#fff', backgroundColor: '#00b1d9', fontSize: '24px', fontWeight: '500', marginTop: '50px', padding: '15px 85px', fontFamily: "'Oswald', sans-serif" }}>SUBMIT</Button>
    </Grid>
  )
}

export default Graph
