import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR
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

// Obtener Listado de Productos consultando la API
export function obtenerProductosAction(){
    return (dispatch) => {
        dispatch( obtenerProductosComienzo() )

        // Consultar API
        clienteAxios.get('libros')
            .then(res => {
                // console.log(res)
                dispatch( descargaProductosExitosa(res.data) )
            })
            .catch(error=> {
                console.log(error)
            }) 
    }
}

export const obtenerProductosComienzo = () => ({
    type: COMENZAR_DESCARGA_PRODUCTOS
})

export const descargaProductosExitosa = productos => ({
    type: DESCARGA_PRODUCTOS_EXITOSA,
    payload: productos
})
