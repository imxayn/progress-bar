import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';


const BarsStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center

`
 function Bars({bars,limit}) {
    return (
        <BarsStyle>
        {bars.map(bar => (
            <div className="w3-border" style={{ width: `${limit}px`}}>
                <div style={{ height: 24, width: `${bar.value > 0 ? bar.value : 0}px`, backgroundColor: bar.value > limit ? 'orangered' : '#2196F3', maxWidth: `${limit}px`, minWidth: 0 }}>
                    <span>{bar.value > 0 ? `${bar.value}%` : ''}</span>
                </div>

            </div>
        ))}
        </BarsStyle>
    )
}

Bars.propTypes = {
    bars: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired
  };

export default Bars
