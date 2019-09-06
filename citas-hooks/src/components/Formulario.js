import React, { Fragment, useState } from 'react';

const Formulario = () => {

    const [ cita, setCita ] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name] : e.target.value

        })
        
    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form>
                <label>Nombre Mascota</label>
                    <input 
                        type="text" 
                        name="mascota"
                        className="u-full-width" 
                        placeholder="Nombre Mascota"
                        onChange={handleChange}
                    />
                    <label>Nombre Dueño</label>
                    <input 
                        type="text" 
                        name="propietario"
                        className="u-full-width"  
                        placeholder="Nombre Dueño de la Mascota" 
                    />
                    <label>Fecha</label>
                    <input 
                        type="date" 
                        className="u-full-width"
                        name="fecha"
                    />               
                    <label>Hora</label>
                    <input 
                        type="time" 
                        className="u-full-width"
                        name="hora" 
                    />
                    <label>Sintomas</label>
                    <textarea 
                        className="u-full-width"
                        name="sintomas"
                    ></textarea>
                    <button type="submit" className="button-primary u-full-width">Agregar</button>
                </form>
        </Fragment>

      );
}
 
export default Formulario;