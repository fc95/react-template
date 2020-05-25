import {
  createStore,
  combineReducers,
  // applyMiddleware,
} from 'redux';
import {
  todoReducer,
  patientReducer
} from './reducers';

// const getInitState = () => {
//   return window.ZC.transform('init');
// };

const reducers = combineReducers({
  todoList: todoReducer,
  patient: patientReducer,
});
const store = createStore(reducers);

export default store;