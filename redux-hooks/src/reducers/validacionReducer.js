import {
    VALIDAR_FORMULARIO,
    VALIDAR_EXITO,
    VALIDAR_ERROR
} from '../types';

// State Inicial
const initialState = {
    error: null
}

export default function(state = initialState, action){
    switch(action.type) {
        case VALIDAR_FORMULARIO:
            return {
                ...state,
                error: null
            }
        case VALIDAR_EXITO:
            return {
                ...state,
                error: null
            }
        case VALIDAR_ERROR:
            return {
                ...state,
                error: true
            }
        default:
            return state
    }
}