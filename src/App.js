import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';

import { Grid } from '@material-ui/core';


function App() {
  const [button, setButton] = useState([])
  const [bar, setBar] = useState([])
  const [limit, setLimit] = useState()



  const handleButton = (event) => {
    const value = parseInt(event.target.value)
    setBar(bar.map(num => (
      num + value > 0 ? (num + value) : 0
    )))
  }

  const handleProgress = () => {
    console.log('progress')
  }



  useEffect(() => {
    async function fetchData() {
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
    //className={classes.main}
    >
      <div style={{ textAlign: 'center' }}>
        <h4>Progress Bar</h4>
        <br />
        {bar && bar.map((num, index) => (
          <>
            <div className="w3-border" style={{ maxWidth: `${limit}%` }}>

              <div className="w3-blue" style={{ height: 24, width: `${num > 0 ? num : 0}%`, background: 'red !important', maxWidth: `${limit}%`, minWidth: 0 }}>
                <span>{num > 0 ? `${num}%` : 0}</span>
              </div>

            </div>
          </>
        ))}
        <br />
        <select>
          {bar && bar.map((num, index) => (

            <option value="progress1" >progress {index + 1}</option>

          ))}
        </select>



        {button && button.map((btn, index) => (

          <input type="button" name="name" value={btn} onClick={handleButton} />
        ))}



      </div>
    </Grid>
  );
}

export default App;
