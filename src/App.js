import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from './components/progressBar'
import { Grid } from '@material-ui/core';


function App() {
  

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    //className={classes.main}
    >
    <ProgressBar /> 
    
      
    </Grid>
  );
}

export default App;
