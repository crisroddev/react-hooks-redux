import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    DESCARGA_PRODUCTOS_EXITOSA,
    DESCARGA_PRODUCTOS_ERROR,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_EXITO,
    PRODUCTO_ELIMINADO_ERROR,
    OBTENER_PRODUCTO_EDITAR,
    PRODUCTO_EDITAR_EXITO,
    PRODUCTO_EDITAR_ERROR
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
                // console.log(error)
                dispatch( descargaProductosError() )
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

export const descargaProductosError = () => ({
    type: DESCARGA_PRODUCTOS_ERROR,
})

// Funcion Que Elimina Producto
export function borrarProductoAction(id){
    return (dispatch) => {
        dispatch( obtenerProductoEliminar() )

        // Eliminar en la API
        clienteAxios.delete(`/libros/${id}`)
            .then(res => {
                console.log(res)
                dispatch( eliminarProductoExito(id) )
            })
            .catch(error => {
                console.log(error)
                dispatch( eliminarProductoError() )
            })
    }
}

export const obtenerProductoEliminar = () => ({
    type: OBTENER_PRODUCTO_ELIMINAR
})

export const eliminarProductoExito = id => ({
    type: PRODUCTO_ELIMINADO_EXITO,
    payload: id
})

export const eliminarProductoError = () => ({
    type: PRODUCTO_ELIMINADO_ERROR,
})

// Funcion para Editar Productos
export function obtenerProductoEditarAction(id) {
    return (dispatch) => {
        dispatch( obtenerProductoAction());

        // Obtener Producto de la API
        clienteAxios.get(`/libros/${id}`)
            .then(res => {
                console.log(res.data);
                dispatch(obtenerProductoEditarExito(res.data) )
            })
            .catch(error => {
                console.log(error);
                dispatch(obtenerProductoEditarError() )
            })
    }
}

export const obtenerProductoAction = () => ({
    type: OBTENER_PRODUCTO_EDITAR,
})

export const obtenerProductoEditarExito = producto => ({
    type: PRODUCTO_EDITAR_EXITO,
    payload: producto
})

export const obtenerProductoEditarError = () => ({
    type: PRODUCTO_EDITAR_ERROR
})
