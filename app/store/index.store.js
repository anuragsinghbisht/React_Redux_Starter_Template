import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index.reducer";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

const enhancers = compose(
  applyMiddleware(promiseMiddleware(), thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
const store = createStore(rootReducer, {}, enhancers);

export default store;
