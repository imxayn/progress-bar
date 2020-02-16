import React from 'react';
import ProgressBar from './components/progressBar'
import { Grid } from '@material-ui/core';


function App() {
  

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
    <ProgressBar /> 
    
      
    </Grid>
  );
}

export default App;
