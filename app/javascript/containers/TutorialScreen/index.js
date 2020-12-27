import React from 'react'
import Graph from '../../components/Graph'
import Simulation from "../../components/Simulation"

const HomeScreen = () => {

  return (
    <div style={{ height: "100%", minHeight: '100vh', backgroundColor: '#565656' }}>
       {/* backgroundImage: `url(${background})` */}
      <Simulation />
    </div>
  )
}

export default HomeScreen
