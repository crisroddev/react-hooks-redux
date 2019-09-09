import React, { Fragment, useState } from 'react'

const Pregunta = () => {

    // Definir State
    const [ cantidad, setCantidad ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleChange =  e => {
        setCantidad(parseInt(e.target.value, 10))
    }

    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if(cantidad < 1 || isNaN(cantidad) ) {
            setError(true);
            return;
        }
        // Si pasa La Validacion
    }

    return ( 
        <Fragment>
            <h2>Coloca tu Presupuesto</h2>
                <form
                    onSubmit={handleSubmit}
                >
                    <input
                        type="number"
                        className="u-full-width"
                        placeholder="Agrega Tu Presupuesto"
                        onChange={handleChange}
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