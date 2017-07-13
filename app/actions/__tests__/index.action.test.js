import * as actions from "../index.action";
import { store, nock } from "../../helper/test.helper";
import actionTypes from "../actionTypes";

describe("action", () => {
  afterEach(() => {
    store.clearActions();
    nock.cleanAll();
  });

  it("should dispatch action", () => {
    store.dispatch(actions.action());
    expect(store.getActions()).toEqual([
      { type: actionTypes.ACTION + "_PENDING" }
    ]);
  });
});
