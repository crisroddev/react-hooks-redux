import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductoLista = ({producto}) => {

    const handleClick = id => {

    }

    return ( 
        <li 
            className="list-group-item d-flex justify-content-between align.items.center"
            data-categoria={producto.categoria}>
            <p>
                {producto.nombre} {' '}
                <span className="font-weight-bold">$ {producto.precio}</span>
            </p>
            <div>
                <Link
                    className="btn btn-success mr-2"
                    to={`/editar-producto/${producto.id}`}>
                    Editar Producto
                </Link>
                <button
                    className="btn btn-danger"
                    onClick={() => handleClick(producto.id)}
                    >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default ProductoLista;