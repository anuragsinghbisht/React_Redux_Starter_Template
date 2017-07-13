import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import mockNock from "nock";

const middlewares = [promiseMiddleware(), thunk];
const mockStore = configureMockStore(middlewares);

export const store = mockStore({});

export const nock = mockNock;
