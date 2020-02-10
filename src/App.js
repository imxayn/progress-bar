import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';


import './App.css';
import { LinearProgress, Grid } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  main:{
    padding:200
  }
}));

function App() {
  const classes = useStyles();
  const [button, setButton] = useState([])
  const [bar, setBar] = useState([])
  const [limit, setLimit] = useState()
  const [value, setValue] = useState()
  
  const handleButton = event => {
    console.log(event.target.value)
    
    
    
    setValue(event.target.value)
  }

  

  useEffect( () => {
    async function fetchData(){
    const response = await axios.get('http://pb-api.herokuapp.com/bars')
    setButton(response.data.buttons)
    setBar(response.data.bars)
    setLimit(response.data.limit)
    }
    fetchData()
   }, []);

  return (
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    className={classes.main}
  >
   <div style={{textAlign: 'center'}}>
      <h4>Progress Bar</h4>
      <br />
   
  <div className="progress">
    <div className="progress-bar" role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={{width: `${value}%`}}>
    {value > 0 && (
      <span>{value}%</span>
    )}  
    </div>
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: `${value}%`}}>
    {value > 0 && (
      <span>{value}%</span>
    )}  
    </div>
  </div>
  <div className="progress">
    <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: `${value}%`}}>
    {value > 0 && (
      <span>{value}%</span>
    )}  
   
    </div>
  </div>
  <select>
  <option value="progress1">progress 1</option>
  <option value="progress2">progress 2</option>
  <option value="progress3"> progress 3</option>
</select>


    {button&& button.map(btn => (
      <input type="button" name="name" value={btn} onClick={handleButton}/>
    ))}

    {console.log(limit,'limit!')}
   
   </div>
   </Grid>
  );
}

export default App;
