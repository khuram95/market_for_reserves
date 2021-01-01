const styles = theme => ({
  verticalLinesContainer: {
    position: "absolute",
    top: "-52px",
    left: "225px"
  },

  arrows: {
    position: 'absolute',
    height: "30px",
    top: '185px',
    left: '-50px'
  },

  defaultLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "400px",
    width: "8px",
    backgroundColor: "#003e4c",
    borderRadius: '5px'
  },

  correctLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "400px",
    width: "8px",
    borderRadius: '5px',
  },

  dragableLine: {
    display: "flex",
    justifyContent: "center",
    height: "400px",
    width: "8px",
    position: "relative",
    borderRadius: '5px',
    transform: "rotate(-45deg)"
  },

  fadedDot: {
    position: "absolute",
    transform: "rotate(45deg)",
    border: "5px solid #003E4C",
    borderRadius: "50%",
    padding: "10px",
    backgroundColor: "#003E4C",
    top: '120px',
    color: "blue",
  },

  correctDot: {
    position: "absolute",
    transform: "rotate(45deg)",
    border: "5px solid #003e4c",
    borderRadius: "50%",
    padding: "10px",
    backgroundColor: "#508a05",
    color: "blue",
  },

  draggableDot: {
    transform: "rotate(45deg)",
    borderRadius: "50%",
    padding: "10px",
    color: "blue"
  }

})
export default styles;
