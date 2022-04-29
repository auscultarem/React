import React, { Fragment } from 'react'
import PropTypes from 'prop-types'


const PrimeraAPP = ( { saludo,  subtitulo } ) => {    

    return (
        <Fragment>
            <h1> { saludo }</h1>
            {/* {<pre> { JSON.stringify( saludo, null, 3) } </pre>} de esta forma se imprime un objeto */}
            <p> { subtitulo } </p>
        </Fragment>
        
    );

}

PrimeraAPP.propTypes = {

    saludo: PropTypes.string.isRequired
}

PrimeraAPP.defaultProps = {
    subtitulo: 'Soy un subtitulo',
}



export default PrimeraAPP;