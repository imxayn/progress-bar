import React, { useState, useEffect } from 'react';
import axios from 'axios'

function ProgressBar() {
    const [limit, setLimit] = useState(0);
    const [progressBars, setProgressBar] = useState([
        {
            index: 1,
            value: null,
            selected: true,
            selectOption: 'Progress Bar 1'
        },
        {
            index: 2,
            value: null,
            selected: false,
            selectOption: 'Progress Bar 2'
        },
        {
            index: 3,
            value: null,
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
                <div className="w3-border" style={{ width: `${limit}px` }}>
                    <div  style={{ height: 24, width: `${bar.value > 0 ? bar.value : 0}px`, backgroundColor: bar.value > limit ? 'red' : '#2196F3', maxWidth: `${limit}px`, minWidth: 0 }}>
                        <span>{bar.value > 0 ? `${bar.value}%` : 0}</span>
                    </div>

                </div>
            ))}
            <br />
            <div style={{ marginRight: 5 }}>
                <select onChange={e => handleChange(e)}>
                    {progressBars && progressBars.map(bar => (
                        <option value={bar.index}>{bar.selectOption}</option>
                    ))}
                </select>

                {buttons.map(b => (
                    <input type="button" name="name" value={b} onClick={() => handleAdd(b)} />
                ))}

            </div>

        </div >

    )

}
export default ProgressBar;


