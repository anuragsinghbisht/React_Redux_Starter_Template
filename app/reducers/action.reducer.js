import actionTypes from "../actions/actionTypes";

export const actionReducer = (state = "", action) => {
  switch (action.type) {
  case actionTypes.ACTION + "_FULFILLED":
    return action.payload.data.message;
  default:
    return state;
  }
};
