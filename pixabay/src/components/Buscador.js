import React, {useState} from 'react'

const Buscador = () => {

    const [ terminoBusqueda, setTerminoBusqueda ] = useState('');

    return ( 
        <form>
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una Imagen"
                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Buscador;