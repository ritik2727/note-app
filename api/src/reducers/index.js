import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import notesReducers from './notesReducers';


export default combineReducers({
    form: formReducer,
    notes:notesReducers
});