import React, { Fragment } from 'react'

const Pregunta = () => {
    return ( 
        <h2>Coloca tu Presupuesto</h2>
        <Fragment>
            <form>
                <input
                    type="number"
                    className="u-fullwidth"
                    placeholder="Agrega Tu Presupuesto"
                    onChange={}
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