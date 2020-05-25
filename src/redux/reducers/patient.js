import * as actions from '../actions';

const defaultState = {
  name: '网三*',
  sex: '男',
  age: 23,
  phone: '13548789821',
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