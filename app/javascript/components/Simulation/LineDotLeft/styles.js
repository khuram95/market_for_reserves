const styles = theme => ({
  verticalLinesContainer: {
    position: "absolute",
    top: "-30px",
    left: "210px",
    transition: "left 1s"
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
    height: "280px",
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

  draggableDot: {
    position: "absolute",
    transform: "rotate(45deg)",
    // border: "5px solid #003e4c",
    borderRadius: "50%",
    padding: "15px",
    backgroundColor: "#00b1d9",
    color: "blue",
  },

  handCursorDesign: {
    position: 'absolute',
    right: '-5px',
    top: '200px',
    transform: 'rotate(45deg)',
    width: '40px',
    transition: 'top 1s'
  }

})
export default styles;
