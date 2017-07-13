import actionTypes from "../actions/actionTypes";

export const errorReducer = (state = {}, action) => {
  switch (action.type) {
  case actionTypes.ACTION + "_REJECTED":
    return {
      ...state,
      appError: action.payload
    };
  default:
    return {
      ...state,
      appError: null
    };
  }
};
