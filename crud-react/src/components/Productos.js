import React, { Fragment } from 'react'

const Productos = ({productos}) => {
    return ( 
        <Fragment>
            <h1 className="text-center">
                Listado de Productos
            </h1>
            <ul className="list-group mt-5">
                {productos.map(producto => (
                    
                ))}
            </ul>
        </Fragment>
     );
}
 
export default Productos;