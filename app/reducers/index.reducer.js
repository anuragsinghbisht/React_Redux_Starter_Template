import { combineReducers } from "redux";
import { actionReducer } from "./action.reducer";

const rootReducer = combineReducers({
  message: actionReducer
});

export default rootReducer;
