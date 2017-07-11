import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index.reducer";
import thunk from "redux-thunk";

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, {}, enhancers);

export default store;
