const styles = theme => ({
  questionTitle: {
    color: '#003E4C',
    fontWeight: '500',
    fontSize: '2rem',
    padding: "60px 20px 60px 0",
    fontFamily: "'Oswald',sans-serif"
  },
  graphContainer: {
    paddingTop: "60px"
  },
  questionContainer: {
    width: '300px',
    border: '5px solid #003E4C',
    padding: '30px',
    margin: '100px 50px 0px 40px',
    backgroundColor: '#fff'
  },
  questionContainerHidden: {
    width: '310px',
    border: 'none',
    padding: '30px',
    margin: '100px 50px 0px 40px',
  },
  questionBody: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  breakingNews: {
    position: 'absolute',
    top: '-60px',
    left: '-80px',
    height: '60px'
  },
  circleIcon: {
    position: 'absolute',
    top: '-115px',
    right: '-85px',
    height: '140px'
  },
  questionText: {
    color: '#565656',
    fontWeight: "400",
    paddingTop: "12px",
    fontSize: '27px',
    fontFamily: "'Oswald', sans-serif"
  },
  subQuestionText: {
    color: '#00b1d9',
    fontWeight: "400",
    paddingTop: "12px",
    fontSize: '27px',
    fontFamily: "'Oswald', sans-serif"
  },
  answerContainer: {
    marginTop: '100px',
    width: '300px',
    border: '5px solid transparent',
    padding: '30px',
    margin: '100px 50px 0px 40px',
  },
  curveShiftingText: {
    color: '#003E4C',
    fontWeight: "600",
    margin: "5px 0 10px 0",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.8rem",
  },

  briefNessHeading: {
    color: '#003E4C',
    fontWeight: "600",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.4rem",
    marginTop: "15px",
    marginBottom: "15px"
  },
  briefNess: {
    color: '#003E4C',
    fontWeight: "600",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.0rem",
    // marginRight: "50px"
  },
  graphDiv: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '100px',
    marginBottom: '50px',
    justifyContent: 'space-around'
  },
  graphLines: {
    borderLeft: '5px solid #565656',
    borderBottom: '5px solid #565656',
    height: '330px',
    width: '460px',
    position: "relative"
  },
  graphYLable: {
    height: '18px',
    position: 'absolute',
    top: '7px',
    left: '-90px'
  },
  graphXLable: {
    height: '18px',
    position: 'absolute',
    bottom: '-35px',
    right: '5px',

  },
  submitButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    fontSize: '36px',
    fontWeight: '500',
    marginTop: '50px',
    padding: '0px 20px',
    borderRadius: '0px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    }
  },
   modalDescription: {
    color: '#fff',
    fontWeight: "300",
    fontFamily: "'Rubik', sans-serif",
    fontSize: "1.5rem",
    letterSpacing: '1px'
  },

  backButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    fontSize: '18px',
    fontWeight: '500',
    left: '230px',
    padding: '5px 25px',
    borderRadius: '10px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    }
  },
  modal: {
    position: 'absolute',
    top: '30vh',
    left: '36vw',
    padding: theme.spacing(2, 4, 3),
    border: '0px',
    outline: 'none',
    "&:focus": {
      border: '0px',
      outline: 'none'
    }
  },
})
export default styles;
