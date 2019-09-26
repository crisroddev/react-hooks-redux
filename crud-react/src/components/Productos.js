import React, { Fragment } from 'react'

const Productos = ({productos}) => {
    return ( 
        <Fragment>
            <h1 className="text-center">Desde Productos</h1>
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    <ProductoLista
                        key={producto.id}
                    />
                ))}
            </ul>

        </Fragment>
     );
}
 
export default Productos;