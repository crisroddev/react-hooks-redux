import React, { Fragment, useState } from 'react';

const Formulario = ({crearCita}) => {

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

    const handleSubmit = e => {
        e.preventDefault();

        // Pasar la Cita al Componente Principal
        crearCita(cita)

        // Reiniciar State

    }

    return (
        <Fragment>
            <h2>Crear Cita</h2>
            <form
                onSubmit={handleSubmit}>
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
                        onChange={handleChange}
                    />
                    <label>Fecha</label>
                    <input 
                        type="date" 
                        className="u-full-width"
                        name="fecha"
                        onChange={handleChange}
                    />               
                    <label>Hora</label>
                    <input 
                        type="time" 
                        className="u-full-width"
                        name="hora" 
                        onChange={handleChange}
                    />
                    <label>Sintomas</label>
                    <textarea 
                        className="u-full-width"
                        name="sintomas"
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit" className="button-primary u-full-width">Agregar</button>
                </form>
        </Fragment>

      );
}
 
export default Formulario;