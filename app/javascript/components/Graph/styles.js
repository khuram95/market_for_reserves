const styles = theme => ({
  questionTitle: {
    color: '#003E4C',
    fontWeight: '500',
    paddingTop: "30px",
    fontFamily: "'Oswald',sans-serif"
  },
  graphContainer: {
    paddingTop: "60px"
  },
  questionContainer: {
    width: '350px',
    border: '5px solid #003E4C',
    padding: '30px',
    marginBottom: '50px',
    backgroundColor: '#fff'
  },
  questionBody: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  breakingNews: {
    marginTop: '-56px',
    height: '50px'
  },
  questionText: {
    color: '#565656',
    fontWeight: "400",
    paddingTop: "12px",
    fontSize: '26px',
    fontFamily: "'Oswald', sans-serif"
  },
  answerContainer: {
    width: '420px',
    marginBottom: '50px'
  },
  curveShiftingText: {
    color: '#003E4C',
    fontWeight: "600",
    margin: "5px 0 10px 0"
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
    marginLeft: '185px',
    justifyContent: 'space-around'
  },
  graphLines: {
    borderLeft: '5px solid #565656',
    borderBottom: '5px solid #565656',
    height: '330px',
    width: '330px',
    position: "relative"
  },
  graphYLable: {
    height: '30px',
    position: 'absolute',
    top: '150px',
    left: '-135px'
  },
  graphXLable: {
    height: '30px',
    marginTop: '10px'
  },
  submitButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    fontSize: '36px',
    fontWeight: '500',
    marginTop: '50px',
    padding: '5px 45px',
    borderRadius: '10px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    }
  }
})
export default styles;
