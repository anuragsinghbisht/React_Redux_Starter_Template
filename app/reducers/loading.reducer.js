import actionTypes from "../actions/actionTypes";

export const loadingReducer = (state = {}, action) => {
  switch (action.type) {
  case actionTypes.ACTION + "_PENDING":
    return {
      ...state,
      appLoading: true
    };
  default:
    return {
      ...state,
      appLoading: false
    };
  }
};
