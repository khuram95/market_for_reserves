const styles = theme => ({

  homeTitle: {
    color: '#003e4c',
    fontWeight: '500',
    fontSize: '4rem',
    fontFamily: "'Oswald',sans-serif",
    marginTop: '120px'
  },

  homeScreenContainer: {
    height: "100%",
    minHeight: '100vh',
    backgroundColor: '#ecf2f1',
    position: "relative",
    cursor: "pointer"
  },

  logo: {
    marginTop: "-200px",
    minWidth: "1000px",
    maxWidth: "1500px",
    // width: "100%",
    height: "600px"
  },

  mruLogo: {
    alignItems: 'flex-end',
    padding: '2rem',
    display: "flex"
  },

  homeDesc: {
    color: '#003e4c',
    fontWeight: '500',
    fontSize: '1.7rem',
    textAlign: 'center',
    fontFamily: "'Oswald',sans-serif",
  },

  classAssignmentTitle: {
    color: '#000',
    fontWeight: '400',
    fontSize: '1rem',
    textAlign: 'center',
    fontFamily: "'Oswald',sans-serif",
  },

  nameInput: {
    width: "250px",
    padding: "6px",
    fontSize: "20px",
    border: "none",
    borderRadius: "4px",
    marginTop: "10px",
    textAlign: "center"
  },

  submitButton: {
    color: '#fff',
    backgroundColor: '#00b1d9',
    fontSize: '36px',
    fontWeight: '500',
    marginTop: '50px',
    padding: '0px 50px',
    borderRadius: '0px',
    fontFamily: "'Oswald', sans-serif",
    "&:hover": {
      backgroundColor: '#056f8a'
    }
  }

})
export default styles;
