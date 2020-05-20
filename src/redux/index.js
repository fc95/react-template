import {
  createStore,
  combineReducers,
  // applyMiddleware,
} from 'redux';
import { todoReducer } from './reducers';

const reducers = combineReducers({
  todoList: todoReducer
});
const store = createStore(reducers);

export default store;