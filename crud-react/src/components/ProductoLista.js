import React from 'react';
import { Link } from 'react-router-dom';

const ProductoLista = ({producto}) => {

    const handleClick = id => {
        console.log('eliminando', id)
    }

    return ( 
    <li 
        className="list-group-item d-flex justify-content-between lign-items-center"
        data-categoria={producto.categoria}>
        <p>
            {producto.nombre} {''}
            <span className="font-weight-bold">${producto.precio}</span>
        </p>
        <div>
            <Link to={`/producto/editar/${producto.id}`}
                className="btn btn-success mr-2">
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