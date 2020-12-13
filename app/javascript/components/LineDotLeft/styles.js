const styles = theme => ({
  verticalLinesContainer: {
    position: "absolute",
    top: "60px",
    left: "170px"
  },

  defaultLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "270px",
    width: "8px",
    backgroundColor: "#2e8599",
    borderRadius: '5px'
  },

  correctLine: {
    transform: "rotate(-45deg)",
    position: 'absolute',
    height: "270px",
    width: "8px",
    borderRadius: '5px',
  },

  dragableLine: {
    display: "flex",
    justifyContent: "center",
    height: "270px",
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
