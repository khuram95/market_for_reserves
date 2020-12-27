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
    backgroundColor: '#71cedb',
    fontFamily: "'Oswald'",
    fontSize: "50px",
    color: "#003e4c",
    padding: "2rem"
  },

  saveButton: {
    color: '#fff',
    backgroundColor: '#003e4c',
    fontSize: '30px',
    fontWeight: '500',
    padding: '0px 50px',
    borderRadius: '0px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    }
  },

  classAssignmentTitle: {
    color: '#000',
    fontWeight: '300',
    fontSize: '30px',
    textAlign: 'center',
    fontFamily: "'Oswald',sans-serif",
  },

  nameInput: {
    width: "250px",
    padding: "6px",
    fontSize: "30px",
    border: "none",
    borderRadius: "4px",
    textAlign: "center"
  },

  answerNumber: {
    fontFamily: "'Oswald'",
    fontSize: "30px",
    fontWeight: "500"
  },

  answerLogo: {
    width: "30px",
    padding: "0 2rem"
  }

})
export default styles;
