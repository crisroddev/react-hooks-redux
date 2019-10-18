const initialState= {
    citas: []
}

export default function(state= initialState, action){
    switch(action.type){
        case 'AGREGAR_CITA':
            return {
                // This.setState
                ...state,
                citas: [...state.citas, action.payload]
            }
        default:
            return state;
    }
}
