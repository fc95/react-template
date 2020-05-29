import * as actions from '../actions';

const defaultState = {
  name: null,
  sex: null,
  age: null,
  id: null,
}

export const patientReducer = function(state = defaultState, action) {
  switch (action.type) {
    case actions.PATIENTINFOCHANGE: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
};