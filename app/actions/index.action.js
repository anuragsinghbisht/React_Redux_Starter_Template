import actions from "./actionTypes";
import { createAction } from "./actions.helper";

export const action = () => {
  return dispatch => {
    dispatch(createAction(actions.ACTION, "hello"));
  };
};
