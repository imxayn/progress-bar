import React, {useState, useEffect} from 'react';
import axios from 'axios'

import './App.css';

function App() {
  const [button, setButton] = useState([])
  const [bar, setBar] = useState([])
  const [limit, setLimit] = useState()
  
  const handleButton = (e) => {
    console.log(e)
  }

  useEffect(async () => {
    const response = await axios.get('http://pb-api.herokuapp.com/bars')
    setButton(response.data.buttons)
    setBar(response.data.bars)
    setLimit(response.data.limit)
   }, []);

  return (
   <div style={{textAlign: 'center'}}>
      Progress Bar
      <br />
    {button.map(btn => (
      
      <button onClick = { (e) => handleButton(e)}>{btn}</button>
        
    ))}
   
   </div>
  );
}

export default App;
