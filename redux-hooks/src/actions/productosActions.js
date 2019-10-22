import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// Crear Nuevo Producto Funcion Principal
export function crearNuevoProductoAction(producto){
    return (dispatch) => {
        dispatch( nuevoProducto() )
        dispatch( nuevoProductoExito(producto) )
    }
}

export const nuevoProducto = () => ({
    type: AGREGAR_PRODUCTO
});

export const nuevoProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
});