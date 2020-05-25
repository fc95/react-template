import * as actions from '../actions';

const defaultState = [
];

export const todoReducer = function(state = defaultState, action) {
  switch (action.type) {
    case actions.TODOADD: {
      return [...state, action.payload];
    }
    case actions.TODODELETE: {
      const nextState = [].concat(state);
      nextState.splice(action.payload, 1)
      return nextState;
    }
    default:
      return state;
  }
};