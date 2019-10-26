import { combineReducers } from 'redux';
import ContatoReducer from './ContatoReducer';

const reducers = combineReducers({
    contato: ContatoReducer
})

export default reducers;