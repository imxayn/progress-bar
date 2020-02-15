import React, { useState, useEffect } from 'react';

import axios from 'axios'


function ProgressBar() {
    const [limit, setLimit] = useState(0);
    const [progressBars, setProgressBar] = useState([
        {
            index: 1,
            value: 60,
            selected: true,
            selectOption: 'Progress Bar 1'
        },
        {
            index: 2,
            value: 20,
            selected: false,
            selectOption: 'Progress Bar 2'

        },
        {
            index: 3,
            value: 60,
            selected: false,
            selectOption: 'Progress Bar 3'

        },
    ]);
    const [buttons, setButtons] = useState([]);



    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://pb-api.herokuapp.com/bars');
            const { buttons, limit, bars } = response.data;
            const mapBarsValues = progressBars.map((bar, index) => {
                bar.value = bars[index]
                return bar;
            });
            setProgressBar(mapBarsValues);
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
        <div style={{ textAlign: 'center' }}>
            <h4>Progress Bar</h4>
            <br />
            {progressBars.map(bar => (
                <div className="w3-border" style={{ maxWidth: `${limit}%` }}>
                    <div className="w3-blue" style={{ height: 24, width: `${bar.value > 0 ? bar.value : 0}%`, background: 'red !important', maxWidth: `${limit}%`, minWidth: 0 }}>
                        <span>{bar.value > 0 ? `${bar.value}%` : 0}</span>
                    </div>
                    
                </div>
            ))}
            <br />
            <select onChange={e => handleChange(e)}>
                {progressBars && progressBars.map(bar => (
                    <option value={bar.index}>{bar.selectOption}</option>
                ))}
            </select>
            <br />
            {buttons.map(b => (
                <button onClick={() => handleAdd(b)}>{b}</button>
            ))}
        </div >

    )

}
export default ProgressBar;


