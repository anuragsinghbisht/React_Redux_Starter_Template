import actions from "./actionTypes";
import { createAction } from "../helper/actions.helper";

export const action = () => {
  return dispatch => {
    dispatch(createAction(actions.ACTION, "Getting started with react"));
  };
};
