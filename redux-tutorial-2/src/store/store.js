import {createStore} from 'redux';
import toDoListReducer from '../reducers/toDoListReducer';

const store = createStore(toDoListReducer);

export default store