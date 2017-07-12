import * as actions from "../index.action";
import { store } from "../../helper/test.helper";
import actionTypes from "../actionTypes";

describe("action", () => {
  afterEach(() => {
    store.clearActions();
  });

  it("should dispatch action", () => {
    store.dispatch(actions.action());
    expect(store.getActions()).toEqual([
      {
        type: actionTypes.ACTION,
        payload: "Getting started with react"
      }
    ]);
  });
});
