import React from 'react';
import { Link } from 'react-router-dom';

const ProductoLista = ({producto}) => {
    return ( 
        <li 
            className="list-group-item d-flex justify-content-between align-items-center"
            data-categoria={producto.categoria}>
            <p>
                { producto.nombre} {' '}
                <span className="font-weight-bold">
                    $ { producto.precio}
                </span>
            </p>
            <div>
                <Link 
                    to={`productos-editar/${producto.id}`}
                    className="btn btn-success mr-2">
                    Editar
                </Link>
            </div>
        </li>
     );
}
 
export default ProductoLista;