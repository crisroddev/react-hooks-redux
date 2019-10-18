import { combineReducers } from 'redux';
import citasReducer from './citasReducer';

export default combineReducers({
    // Defino que el state citas va a ser citasReducer
    citas: citasReducer
})