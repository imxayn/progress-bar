import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';



import { Grid } from '@material-ui/core';

// const useStyles = makeStyles(theme => ({
//   main:{
//     //padding:200
//   }
// }));

function App() {
  //const classes = useStyles();
  const [button, setButton] = useState([])
  const [bar, setBar] = useState([])
  const [limit, setLimit] = useState()
  //const [value, setValue] = useState()

  const progressBar = [1, 2, 3]

  const handleButton = (event) => {
    const value = parseInt(event.target.value)
    setBar(bar.map(num => num + value))

  }



  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('http://pb-api.herokuapp.com/bars')
      console.log(response)
      setButton(response.data.buttons)
      setBar(response.data.bars.slice(0, 3))
      setLimit(response.data.limit)
    }
    fetchData()
  }, []);
  console.log(bar)


  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    //className={classes.main}
    >
      <div style={{ textAlign: 'center' }}>
        <h4>Progress Bar</h4>
        <br />
        {bar && bar.map((num, index) => (
          <>
            <div className="w3-border">
              <div className="w3-blue" style={{ height: 24, width: `${num}%`, background: 'red', maxWidth: `${limit}%` }}>
                <span>{num}%</span>
              </div>
            </div>
          </>
        ))}
        <br />


        <select>
          <option value="progress1">progress 1</option>
          <option value="progress2">progress 2</option>
          <option value="progress3"> progress 3</option>
        </select>

        {button && button.map((btn, index) => (
          <input type="button" name="name" value={btn} onClick={handleButton} />
        ))}



      </div>
    </Grid>
  );
}

export default App;
