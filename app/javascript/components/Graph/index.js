import React from 'react'
import LineDot from '../LineDot'
import Grid from '@material-ui/core/Grid'

const Graph = () => {
  return (
    <Grid container justify='center'>
      <div style={{ borderLeft: '10px solid red', borderBottom: '10px solid red', height: '400px', width: '400px' }}>
        <LineDot />
      </div>
    </Grid>
  )
}

export default Graph
