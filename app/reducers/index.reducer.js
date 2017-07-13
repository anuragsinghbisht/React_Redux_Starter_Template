import { combineReducers } from "redux";
import { actionReducer } from "./action.reducer";
import { loadingReducer } from "./loading.reducer";
import { errorReducer } from "./error.reducer";

const rootReducer = combineReducers({
  message: actionReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;
