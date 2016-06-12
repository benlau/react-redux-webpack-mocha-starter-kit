import ActionTypes from "../constants/ActionTypes";


export default function CounterReducer(state = 1, action) {

  switch (action.type) {

  case ActionTypes.ADD_COUNTER:
    return state + 1;

  case ActionTypes.DEC_COUNTER:
    return state - 1;

  default:
    return state;

  }

}
