import React, { useState } from 'react';
 
const Formulario = ({datosConsulta}) => {

    // State del Componente
    // Busqueda State
    // setBusqueda es this.setState
    const [busqueda, setBusqueda ] = useState({
        ciudad: '',
        pais: ''
    })
    
    const handleChange = e => {
        // Cambiar el State
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });

        // // Console.log state
        // console.log(busqueda)
    }

    const handleSubmit = e => {
        e.preventDefault();
        // Paso Hacia componente principal con el metodo y el hook
        datosConsulta(busqueda);
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select 
                    onChange={handleChange} 
                    name="pais">
                    <option value="">Selecciona un Pais</option>
                    <option value="US">Estados Unidos</option>
                    <option value="CL">Chile</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Peru</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input
                    type="submit"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                    value="Buscar Clima"
                />
            </div>
        </form>
     );
}
 
export default Formulario;