import actionTypes from "../actions/actionTypes";

export const actionReducer = (state = "", action) => {
  switch (action.type) {
  case actionTypes.ACTION:
    return action.payload;
  default:
    return state;
  }
};
