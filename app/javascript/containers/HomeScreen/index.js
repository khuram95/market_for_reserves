import React from 'react'
import Graph from '../../components/Graph'
import background from '../../images/background.png'
// import Draggable, { DraggableCore } from 'react-draggable'; // Both at the same time


const HomeScreen = () => {

  return (
    <div style={{ height: "100%", minHeight: '100vh', backgroundColor: '#ecf2f1' }}>
       {/* backgroundImage: `url(${background})` */}
      <Graph />
    </div>
  )
}

export default HomeScreen
