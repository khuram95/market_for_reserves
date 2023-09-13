import React from 'react'
import Graph from '../../components/Graph'
import Simulation from "../../components/Simulation"

const TutorialScreen = (props) => {

  return (
    <div style={{ height: "100%", minHeight: '100vh', backgroundColor: '#565656' }}>
      <Simulation {...props} />
    </div>
  )
}

export default TutorialScreen
