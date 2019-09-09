import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Formulario = (props) => {

    const { setGasto, setCrearGasto } = props;

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
        
        // Construir Objeto de Gasto
        const gasto = {
            nombreGasto,
            nombreGasto,
            id: shortid.generate()
        }
        
        // Pasar Gasto al Componente Principal
        setGasto(gasto);
        setError(false);

        // Reset form
        setNombreGasto('');
        setCantidadGasto('');
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
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad del Gasto</label>
                <input
                    className="u-full-width"
                    type="number"
                    placeholder="Ej 300"
                    onChange={e => setCantidadGasto(e.target.value, 10)}
                    value={cantidadGasto}
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