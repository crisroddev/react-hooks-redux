import { combineReducers } from 'redux';
import citasReducer from './citasReducer';
import validacionReducer from './validacionReducer';


export default combineReducers({
    // Defino que el state citas va a ser citasReducer
    citas: citasReducer,
    error: validacionReducer
})