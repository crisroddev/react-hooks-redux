import {
    VALIDAR_FORMULARIO,
    VALIDAR_EXITO,
    VALIDAR_ERROR
} from '../types';

export function validarFormularioAction(){
    return dispatch => {
        dispatch( iniciarValidacion() )
    }
}

export const iniciarValidacion = () => {
    return {
        type: VALIDAR_FORMULARIO
    }
}



