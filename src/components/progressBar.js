import React, { useState, useEffect } from 'react';
import axios from 'axios'

function ProgressBar() {
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
            <div style={{display: 'flex', flexDirection: 'column',alignItems:'center'}}>
            {progressBars.map(bar => (
                <div className="w3-border" style={{ width: `${limit}px`}}>
                    <div style={{ height: 24, width: `${bar.value > 0 ? bar.value : 0}px`, backgroundColor: bar.value > limit ? 'orangered' : '#2196F3', maxWidth: `${limit}px`, minWidth: 0 }}>
                        <span>{bar.value > 0 ? `${bar.value}%` : ''}</span>
                    </div>

                </div>
            ))}
            </div>
            <br />
            <div style={{marginLeft: 2}}>
                <span style={{marginRight:176, fontWeight: 600}}>Select option:</span>
                <br />
                <select onChange={e => handleChange(e)} style={{ marginRight: 5 }}>
                    {progressBars && progressBars.map(bar => (
                        <option value={bar.index}>{bar.selectOption}</option>
                    ))}
                </select>

                {buttons.map(b => (
                    <input type="button" name="name" style={{ marginRight: 2, marginBottom: 2 }} value={b} onClick={() => handleAdd(b)} />
                ))}

            </div>

        </div >

    )

}
export default ProgressBar;


