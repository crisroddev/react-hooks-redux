import React, { useEffect } from 'react';

// Redux
import{ useDispatch, useSelector } from 'react-redux';
import { obtenerProductoEditarAction } from '../actions/productosActions'

const EditarProducto = ({ match }) => {

    // Dispatch para ejecutar accion principal
    const dispatch = useDispatch();

    // Obtener el Id a Editar
    const { id } = match.params;

    useEffect(() => {
        dispatch( obtenerProductoEditarAction(id) )
    }, [dispatch, id])

    // Acceder al State
    const producto = useSelector(state => state.productos.producto);

    // Cuand Carga la API
    if(!producto) return 'Cargando'

    return ( 
        <div className="row justify-content-center mt-5">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center">Editar Producto</h2>
                    <form>
                        <div className="form-group">
                            <label>Titulo</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Titulo"
                                defaultValue={producto.nombre}
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio del Producto</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Precio" 
                                defaultValue={producto.precio}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EditarProducto;