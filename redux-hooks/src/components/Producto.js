import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

// Redux
import { borrarProductoAction } from '../actions/productosActions';
import { useDispatch } from 'react-redux';

const Producto = ({producto}) => {

    const dispatch = useDispatch();
    const confirmarEliminarProducto = id => {

        // Preguntar Usuario si Quiere Eliminar
        Swal.fire({
            title: 'Estás seguro que quieres Eliminar?',
            text: "Un Producto Eliminado no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'

          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Eliminado!',
                'Producto Eliminado',
                'success'
              )

              dispatch( borrarProductoAction() )
            }
          })
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