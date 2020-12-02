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
    width: '320px',
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
    fontFamily: "'Oswald', sans-serif"
  },
  answerContainer: {
    width: '390px', marginBottom: '50px'
  },
  curveShiftingText: {
    color: '#003E4C',
    fontWeight: "600",
    margin: "5px 0 10px 0"
  },
  briefNess: {
    color: '#003E4C',
    fontWeight: "600",
    fontSize: "1.2rem",
    marginRight: "50px"
  },
  graphDiv: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '185px',
    justifyContent: 'space-around'
  },
  graphLines: {
    borderLeft: '5px solid #003E4C',
    borderBottom: '5px solid #565656',
    height: '400px',
    width: '400px',
    position: "relative"
  },
  graphYLable: {
    height: '30px',
    position: 'absolute',
    top: '180px',
    left: '-135px'
  },
  graphXLable: {
    height: '30px',
    marginTop: '10px'
  },
  submitButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    fontSize: '24px',
    fontWeight: '500',
    marginTop: '50px',
    padding: '15px 85px',
    fontFamily: "'Oswald', sans-serif"
  }
})
export default styles;
