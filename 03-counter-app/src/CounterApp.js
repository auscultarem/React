import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ( { value } ) => {

    const [counter, setCounter ] = useState( value );
    

    //handleAdd
    const handleAdd = () => {
        setCounter( counter + 1 );
    }

    //handleReset
    const handleReset = () =>{
        setCounter( value );
    }

    //handleSubstract
    const handleSubstract = () => {
        setCounter( counter - 1);
    }

    return (
        <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>
        {/* <button onClick={ ( event ) => { handleAdd( event) } }>Button</button> */}
        <button onClick={ handleAdd }>Add</button>
        <button onClick={ handleReset }>Reset</button>
        <button onClick={ handleSubstract }>Substract</button>
        </>  

    );
}

CounterApp.prototype = {

    value: PropTypes.number
}

CounterApp.defaultProps = {
    value : 0,
}

export default CounterApp