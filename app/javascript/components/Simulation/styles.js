const styles = theme => ({
  tutorialGrid: {
    display: 'flex',
    alignSelf: 'flex-start'
  },
  tutorialText: {
    color: '#fff',
    fontSize: '35px',
    fontWeight: '500',
    marginTop: '15px',
    padding: '0px 20px',
    fontFamily: "'Oswald', sans-serif",
  },
  youCanImg: {
    height: '60px'
  },
  shiftTheCurve: {
    height: '80px',
    marginBottom: "20px"
  },
  textContainer: {
    paddingTop: "50px",
    flex: '1'
  },
  graphContainer: {
    // paddingTop: "50px",
    flex: '1'
  },
  questionTitle: {
    color: '#fff',
    fontWeight: '500',
    textAlign: "center",
    fontSize: '3rem',
    marginBottom: "50px",
    fontFamily: "'Oswald',sans-serif"
  },
  questionDesc: {
    color: '#003e4c',
    fontWeight: '500',
    fontSize: '2rem',
    fontFamily: "'Oswald',sans-serif"
  },
  questionText: {
    color: '#003e4c',
    fontWeight: '500',
    fontSize: '2.4rem',
    padding: "0px 20px 20px 20px",
    marginTop: "-10px",
    fontFamily: "'Oswald',sans-serif"
  },
  questionContainer: {
    width: '390px',
  },
  questionBody: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  graphDiv: {
    display: 'flex',
    alignItems: 'center',
    // marginLeft: '100px',
    marginBottom: '50px',
    justifyContent: 'space-around'
  },
  graphLines: {
    borderLeft: '5px solid #fff',
    borderBottom: '5px solid #fff',
    height: '250px',
    width: '360px',
    position: "relative",
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
})
export default styles;
