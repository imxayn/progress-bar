import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';


const Option = styled.option`
    margin-right: 176px;
    font-weight: 600
`
const Select = styled.select`
    margin-right: 5px
`


 function BarSelector({bars,handleChange}) {
    return (
        <>
        <Option>Select option:</Option>
                <Select onChange={e => handleChange(e)} >
                    {bars && bars.map(bar => (
                        <Option value={bar.index}>{bar.selectOption}</Option>
                    ))}
                </Select>
        </>
    )
}

BarSelector.propTypes = {
    bars: PropTypes.array.isRequired,
    handleChange: PropTypes.func.isRequired
  };

export default BarSelector;
