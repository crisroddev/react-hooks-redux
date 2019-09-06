import React, { Fragment, useState } from 'react'

const Pregunta = () => {

    // Definir State
    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);


    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
                <form>
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Agrega Tu Presupuesto"
                        onChange={e => setCantidad(parseInt(e.target.value, 10) ) }
                    />
                    <input
                        type="submit"
                        className="button-primary u-full-width"
                        value="Definir Presupuesto"
                    />
                </form>
        </Fragment>
        
     );
}
 
export default Pregunta;