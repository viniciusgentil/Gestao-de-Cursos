import { combineReducers } from 'redux';
import ContatoReducer from './ContatoReducer';
import CursoReducer from './CursoReducer';

const reducers = combineReducers({
    contato: ContatoReducer,
    curso: CursoReducer
})

export default reducers;