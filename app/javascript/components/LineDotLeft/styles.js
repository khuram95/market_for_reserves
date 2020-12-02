const styles = theme => ({
  verticalLinesContainer: {
    position: "absolute",
    top: "80px",
    left: "190px"
  },

  defaultLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "300px",
    width: "5px",
    backgroundColor: "#2e8599",
    borderRadius: '5px'
  },

  correctLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "300px",
    width: "5px",
    borderRadius: '5px',
  },

  dragableLine: {
    display: "flex",
    justifyContent: "center",
    height: "300px",
    width: "5px",
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
    top: '135px',
    color: "blue",
  },

  correctDot: {
    position: "absolute",
    transform: "rotate(45deg)",
    border: "5px solid #003e4c",
    borderRadius: "50%",
    padding: "10px",
    backgroundColor: "#00b1d9",
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
