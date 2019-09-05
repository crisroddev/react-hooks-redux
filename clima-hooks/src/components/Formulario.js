import React from 'react'
 
const Formulario = () => {

    const handleChange = e => {
        // Cambiar el State
    }

    return ( 
        <form>
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