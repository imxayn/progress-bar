import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';


const Input = styled.input`
    margin-right: 2px;
    margin-bottom: 2px

`

 function Buttons({data,handleClick}) {
    return (
        data.map(btn=> (
            <Input 
            type="button" 
            name="name" 
            style={{ marginRight: 2, marginBottom: 2 }} 
            value={btn} 
            onClick={() => handleClick(btn)} />
        ))
    )
}


Buttons.propTypes = {
    data: PropTypes.array.isRequired,
    handleClick: PropTypes.func.isRequired
  };
export default Buttons;
