import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

import clienteAxios from '../config/axios';

// Crear Nuevo Producto Funcion Principal
export function crearNuevoProductoAction(producto){
    return (dispatch) => {
        dispatch( nuevoProducto() )

        // Insertar en la API
        clienteAxios.post('/libros', producto)
            .then(res => {
                console.log(res)
                dispatch( nuevoProductoExito(producto) )
            })
            .catch(error => {
                console.log(error)
                dispatch( nuevoProductoError() )
            })
        
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
});

export const nuevoProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});

export const nuevoProductoError = (error) => ({
    type: AGREGAR_PRODUCTO_ERROR
});