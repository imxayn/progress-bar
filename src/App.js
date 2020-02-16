import React from 'react';
import ProgressBarContainer from './components/progressBarContainer'
import { Grid } from '@material-ui/core';


function App() {


  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >

      <ProgressBarContainer />



    </Grid>
  );
}

export default App;
