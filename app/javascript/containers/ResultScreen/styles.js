const styles = theme => ({

  resultTitle: {
    fontFamily: "'Oswald'",
    fontSize: "50px",
    fontWeight: "500"
  },

  totalScore: {
    fontFamily: "'Oswald'",
    fontSize: "60px",
    fontWeight: "500"
  },

  score: {
    fontFamily: "'Oswald'",
    fontSize: "45px",
    fontWeight: "500",
    paddingRight: "1rem"
  },

  resultScreenContainer: {
    height: "100%",
    minHeight: '100vh',
    backgroundColor: '#ecf2f1',
    fontFamily: "'Oswald'",
    fontSize: "50px",
    color: "#003e4c",
    padding: "2rem"
  },

  downloadImage: {
    width: "33px",
    marginRight: "15px",
    marginTop: "-5px"
  },

  saveButton: {
    color: '#fff',
    backgroundColor: '#003e4c',
    fontSize: '30px',
    fontWeight: '500',
    padding: '0px 20px',
    borderRadius: '0px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    }
  },

  classAssignmentTitle: {
    color: '#003e4c',
    fontWeight: '400',
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: "rubik",
  },

  errorText: {
    paddingTop: "10px",
    color: "red",
    fontSize: "20px"
  },

  studentName: {
    color: '#003e4c',
    fontWeight: '300',
    fontSize: '40px',
    textAlign: 'center',
    fontFamily: "rubik",
  },

  nameInput: {
    width: "450px",
    padding: "6px",
    fontSize: "30px",
    border: "none",
    color: '#003e4c',
    marginRight: "1rem",
    borderRadius: "4px",
    textAlign: "center",
    fontWeight: "100",
    fontFamily: "rubik"

  },

  answerNumber: {
    fontFamily: "rubik",
    fontSize: "30px",
    fontWeight: "500"
  },

  answerLogo: {
    width: "30px",
    padding: "0 1rem"
  }

})
export default styles;
