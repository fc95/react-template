import * as actions from '../actions';

const defaultState = [
];

export const todoReducer = function(state = defaultState, action) {
  switch (action.type) {
    case actions.ADD_TODO: {
      return [...state, action.payload];
    }
    case actions.DELETE_TODO: {
      const nextState = [].concat(state);
      nextState.splice(action.payload, 1)
      return nextState;
    }
    default:
      return state;
  }
};