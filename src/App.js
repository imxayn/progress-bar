import React, {useState, useEffect} from 'react';
import axios from 'axios'

import './App.css';

function App() {
  const [button, setButton] = useState([])
  const [bar, setBar] = useState([])
  const [limit, setLimit] = useState()
  
  const handleButton = event => {
    console.log(event.target.value)
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
   <div style={{textAlign: 'center'}}>
      Progress Bar
      <br />
    {button&& button.map(btn => (
      
      <button onClick = {handleButton}>{btn}</button>
        
    ))}
    {console.log(bar,'bar')}
    <select>{bar.map(br => (
      <option>{br}</option>
    ))}</select>
   
   </div>
  );
}

export default App;
