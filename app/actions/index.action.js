import actionTypes from "./actionTypes";
import { createAction } from "../helper/actions.helper";
import axios from "axios";

export const action = () => {
  return dispatch => {
    dispatch(createAction(actionTypes.ACTION, axios.get("/api")));
  };
};
