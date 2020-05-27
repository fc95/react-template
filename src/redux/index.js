import {
  createStore,
  combineReducers,
  // applyMiddleware,
} from 'redux';
import {
  todoReducer,
  patientReducer
} from './reducers';

const reducers = combineReducers({
  todoList: todoReducer,
  patient: patientReducer,
});
// const store = createStore(reducers);

const _createStore = initState => createStore(reducers, initState);
export default _createStore;