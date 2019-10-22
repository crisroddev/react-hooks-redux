import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types';

// Cada Reducer Tiene su State
const initialState = {
    productos: [],
    error: null,
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_PRODUCTO:
            return {
                ...state,
                error: false,
            }
        case AGREGAR_PRODUCTO_EXITO:
            return {
                ...state,
                error: false,
                productos: [...state.productos, action.payload]
            }
        case AGREGAR_PRODUCTO_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
