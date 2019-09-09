import React, { useState } from 'react';
import Error from './Error';

const Formulario = (props) => {

    // State
    const [ nombreGasto, setNombreGasto ] = useState('');
    const [ cantidadGasto, setCantidadGasto ] = useState(0);
    const [ error, setError ] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        // Validar
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ('')) {
            setError(true)
            return;
        }

        // Pasar Gasto al Componente Principal

    }

    return ( 
        <form
            onSubmit={handleSubmit}    
        >
            <h2>Agrega Tus Gastos Aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}
            <div className="campo">
                <label>Nombre del Gasto</label>
                <input
                    className="u-full-width"
                    type="text"
                    placeholder="Ej Transporte"
                    onChange={e => setNombreGasto(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    className="u-full-width"
                    type="number"
                    placeholder="Ej 300"
                    onChange={e => setCantidadGasto(e.target.value, 10)}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
     );
}
 
export default Formulario;