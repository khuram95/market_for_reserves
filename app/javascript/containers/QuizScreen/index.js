import React from 'react'
import Graph from '../../components/Graph'


const QuizScreen = (props) => {

  return (
    <div style={{ height: "100%", minHeight: '100vh', backgroundColor: '#ecf2f1' }}>
       {/* backgroundImage: `url(${background})` */}
      <Graph {...props} />
    </div>
  )
}

export default QuizScreen
