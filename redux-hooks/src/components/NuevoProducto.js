import React, { useState } from 'react';

// Redux
import { crearNuevoProductoAction } from '../actions/productosActions';
import { useDispatch } from 'react-redux';

const NuevoProducto = () => {

    // State
    const [ nombre, setNombre ] = useState('');
    const [ precio, setPrecio ] = useState('');

    // Crear Nuevo Producto
    const dispatch = useDispatch();
    const agregarProducto = (producto) => dispatch(crearNuevoProductoAction(producto) )

    // Submit
    const handleSubmit = e => {
        e.preventDefault();

        agregarProducto({
            nombre,
            precio
        });

        // Validar Form
        if(nombre.trim() === '' || precio.trim() === '') {
            console.log('error')
            return;
        }

        // Al Pasar Validacion

        // Crear Producto

        // Redireccionar
    }

    return ( 
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Nombre Libro"
                                    value={nombre}
                                    onChange={ e => setNombre(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Precio Libro</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Precio Libro" 
                                    value={precio}
                                    onChange={ e => setPrecio(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                        </form>
        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NuevoProducto;