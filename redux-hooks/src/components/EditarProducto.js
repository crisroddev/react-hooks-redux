import React, { useEffect, useRef } from 'react';

// Redux
import{ useDispatch, useSelector } from 'react-redux';
import { obtenerProductoEditarAction, editarProductoAction } from '../actions/productosActions'
import { validarFormularioAction, validacionError, validacionExito } from '../actions/validacionActions';

const EditarProducto = ({ match, history }) => {

    // Crear los refs
    const nombreRef = useRef('');
    const precioRef = useRef('');

    // Dispatch para ejecutar accion principal
    const dispatch = useDispatch();
    const editarProducto = (producto) => dispatch(editarProductoAction(producto) );
    const validarFormulario = () => dispatch(validarFormularioAction() ); 
    const exitoValidacion = () => dispatch(validacionExito() );
    const errorValidacion = () => dispatch(validacionError() );

    // Obtener el Id a Editar
    const { id } = match.params;

    useEffect(() => {
        dispatch( obtenerProductoEditarAction(id) )
    }, [dispatch, id])

    // Acceder al State
    const producto = useSelector(state => state.productos.producto);
    const error = useSelector(state => state.productos.error);

    // Cuand Carga la API
    if(!producto) return 'Cargando'

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(nombreRef.current.value)
        // console.log(precioRef.current.value)

        // Validar Form
        validarFormulario();

        if(nombreRef.current.value.trim()  === '' || precioRef.current.value.trim() === ''){
            errorValidacion();
            return;
        }

        // No hay Error
        exitoValidacion();

        // Guardar los cambios
        editarProducto({
            id,
            nombre: nombreRef.current.value,
            precio: precioRef.current.value,
        });

        // Redireccionar
        history.push('/');
    }

    return ( 
        <div className="row justify-content-center mt-5">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center">Editar Producto</h2>
                    <form
                        onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Titulo</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Titulo"
                                defaultValue={producto.nombre}
                                ref={nombreRef}
                            />
                        </div>
                        <div className="form-group">
                            <label>Precio del Producto</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Precio" 
                                defaultValue={producto.precio}
                                ref={precioRef}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Guardar Cambios</button>
                    </form>
                    { error ? <div className="font-weight-bold alert alert alert-danger text-center mt-4">Hubo un Error</div> : null}
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default EditarProducto;