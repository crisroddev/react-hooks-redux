import React from 'react'

const ProductoLista = ({producto}) => {
    return ( 
    <li className="list-group-item d-flex justify-content-between lign-items-center">
        <p>
            {producto.nombre} {''}
            <span className="font-weight-bold">${producto.precio}</span>
        </p>
        <div>

        </div>
    </li>
     );
}
 
export default ProductoLista;