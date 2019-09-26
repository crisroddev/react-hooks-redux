import React from 'react';
import {Link} from 'react-router-dom';

const ProductoLista = ({producto}) => {

    const handleClick = id => {
        console.log('Eliminando', id)
    }

    return ( 
        <li 
            data-categoria={producto.categoria}
            className="list-group-item d-flex justify-content-between align-items-center">
            <p>
                {producto.nombre} {''}
                <span className="font-weight-bold">${producto.precio}</span>
            </p>
            <div>
                <Link
                    className="btn btn-success mr-2" 
                    to={`/editar-producto/${producto.id}`}>
                    Editar
                </Link>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleClick(producto.id)}>
                        Eliminar &times;
                </button>
            </div>
        </li>

     );
}
 
export default ProductoLista;