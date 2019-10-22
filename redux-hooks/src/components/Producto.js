import React from 'react';
import { Link } from 'react-router-dom';

// Redux
import { borrarProductoAction } from '../actions/productosActions';
import { useDispatch } from 'react-redux';

const Producto = ({producto}) => {

    const dispatch = useDispatch();
    const confirmarEliminarProducto = id => {
        console.log(id)
    }

    return ( 
        <tr>
            <td>{producto.nombre}</td>
            <td><span className="font-weight-bold">{producto.precio}</span></td>
            <td className="acciones">
                <Link to={`/productos/editar/${producto.id}`}
                    className="btn btn-primary mr-2">
                        Editar
                </Link>
                <button
                    className="btn btn-danger"
                    onClick={() => confirmarEliminarProducto(producto.id)}> 
                    Eliminar
                </button>
            </td>
        </tr>
     );
}
 
export default Producto;