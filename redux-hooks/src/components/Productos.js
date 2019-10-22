import React, { Fragment, useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productosActions';

const Productos = () => {

    // Llamo Accion Principal retornar Productos
    const dispatch = useDispatch();

    useEffect(() => {
        // Productos cuando componente este listo
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
    }, []);


    return ( 
        <Fragment>
            <h2 className="text-center my-5">Listado de Productos</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Acciones</th>
                    </tr>   
                </thead>
                <tbody>

                </tbody>
            </table>
        </Fragment>
     );
}
 
export default Productos;