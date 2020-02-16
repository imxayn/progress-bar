import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Buttons from './buttons'
import BarSelector from './barSelector'
import Bars from './bars'

function ProgressBarContainer() {
    const [limit, setLimit] = useState(0);
    const [progressBars, setProgressBar] = useState([]);
    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://pb-api.herokuapp.com/bars');
            const { buttons, limit, bars } = response.data;
            bars.map((bar, index) => {
                progressBars.push(
                    {
                        index: index,
                        value: bar,
                        selected: index === 0 ? true : false,
                        selectOption: `Progress Bar ${index + 1}`
                    }
                )
            })
            setButtons(buttons);
            setLimit(limit);
        }
        fetchData()
    }, []);

    const handleChange = (e) => {
        const mapBarsValues = progressBars.map(bar => {
            bar.selected = bar.index === parseInt(e.target.value);
            return bar;
        })
        setProgressBar(mapBarsValues);
    }

    const handleAdd = (value) => {
        const mapBarsValues = progressBars.map(bar => {
            bar.value = bar.selected ? (bar.value + value > 0 ? (bar.value + value) : 0) : bar.value;
            return bar;
        })
        setProgressBar(mapBarsValues);

    }

    return (
        <div style={{ textAlign: 'center', border: '2px solid gray' }}>
            <h4>Progress Bar</h4>
            <br />
            <Bars bars={progressBars} limit={limit} />
            <br />
            <BarSelector bars={progressBars} handleChange={handleChange} />
            <Buttons data={buttons} handleClick={handleAdd} />
               
            


        </div >

    )

}
export default ProgressBarContainer;


